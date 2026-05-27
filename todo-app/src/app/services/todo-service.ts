import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/todos';

  getTodos() {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getTodo(id: number) {
  return this.http.get<Todo>(`${this.baseUrl}/${id}`);
}

  getOverdueTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}/overdue`);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  updateTodo(id: number, todo: Todo) {
    return this.http.put<Todo>(`${this.baseUrl}/${id}`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete<Todo>(`${this.baseUrl}/${id}`);
  }

}
