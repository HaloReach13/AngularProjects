import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo-service';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  todoService = inject(TodoService)
  router = inject(Router)
  todos = signal<Todo[]>([])
  newDescription = '';
  newDeadline = '';
  showOverdue = false;

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.showOverdue = false;
    this.todoService.getTodos().subscribe({
      next: todos => this.todos.set(todos),
      error: err => console.error(err)
    });
  }

  getOverdueTodos() {
    this.showOverdue = true;
    this.todoService.getOverdueTodos().subscribe({
      next: todos => this.todos.set(todos),
      error: err => console.error(err)
    })
  }

  createTodo() {
    if (!this.newDescription.trim() || !this.newDeadline) return;

    const newTodo: Todo = {
      description: this.newDescription,
      deadline: this.newDeadline,
      completionStatus: false
    };

    this.todoService.createTodo(newTodo).subscribe({
      next: () => {
        this.newDescription = '';
        this.newDeadline = '';
        this.refreshList();
      },
      error: err => console.error(err)
    });
  }

  toggleComplete(todo: Todo) {
    if (todo.id === undefined) return;

    this.todoService.updateTodo(todo.id, { ...todo, completionStatus: !todo.completionStatus }).subscribe({
      next: () => this.refreshList(),
      error: err => console.error(err)
    });
  }

  editTodo(id?: number) {
    if (id !== undefined) {
      this.router.navigate(['/edit', id]);
    }
  }

  deleteTodo(id?: number) {
    if (id === undefined) return;

    if (confirm('Biztosan törölni szeretné ezt a feladatot?')) {
      this.todoService.deleteTodo(id).subscribe({
        next: () => this.refreshList(),
        error: err => console.error(err)
      });
    }
  }

  refreshList() {
    if (this.showOverdue) {
      this.getOverdueTodos();
    } else {
      this.getTodos();
    }
  }
}
