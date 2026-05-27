import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoEditor } from './todo-editor/todo-editor';

export const routes: Routes = [
    {
        path: '',
        component: TodoList
    },
    {
        path: 'edit/:id',
        component: TodoEditor
    }
];
