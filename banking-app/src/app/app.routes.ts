import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserEditor } from './user-editor/user-editor';
import { TransactionEditor } from './transaction-editor/transaction-editor';

export const routes: Routes = [
    {
        path:'',
        component: UserList
    },
    {
        path:'create-user',
        component: UserEditor
    },
    {
        path:'edit-user/:id',
        component: UserEditor
    },
    {
        path:'create-transaction',
        component: TransactionEditor
    }
];
