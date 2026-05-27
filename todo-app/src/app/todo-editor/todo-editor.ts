import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo-service';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todo-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-editor.html',
  styleUrl: './todo-editor.css',
})
export class TodoEditor implements OnInit {
  todoService = inject(TodoService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  todo = signal<Todo | null>(null);

  ngOnInit() {
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    const id = Number(idParam);
    
    this.todoService.getTodo(id).subscribe({
      next: (foundTodo) => {
        this.todo.set({ ...foundTodo });
      },
      error: (err) => {
        console.error('Hiba a feladat betöltésekor:', err);
        alert('A kért feladat nem található vagy szerverhiba történt!');
        this.goBack();
      }
    });
  }
}

  save() {
    const currentTodo = this.todo();
    if (!currentTodo || !currentTodo.id || !currentTodo.description.trim() || !currentTodo.deadline) return;

    this.todoService.updateTodo(currentTodo.id, {
      description: currentTodo.description,
      deadline: currentTodo.deadline,
      completionStatus: currentTodo.completionStatus
    }).subscribe({
      next: () => {
        this.goBack();
      },
      error: (err) => console.error('Hiba a mentés során:', err)
    });
  }

  // Visszalépés a listához
  goBack() {
    this.router.navigate(['/']);
  }
}
