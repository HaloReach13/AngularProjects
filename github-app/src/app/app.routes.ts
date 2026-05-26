import { Routes } from '@angular/router';
import { UserSearch } from './user-search/user-search';
import { UserDatas } from './user-datas/user-datas';
import { RepoSearch } from './repo-search/repo-search';
import { RepoDatas } from './repo-datas/repo-datas';

export const routes: Routes = [
    {
        path: '',
        component: UserSearch
    },
    {
        path: 'search-users',
        component: UserSearch
    },
    {
        path: 'user/:username',
        component: UserDatas
    },
    {
        path: 'search-repos',
        component: RepoSearch
    },
    {
        path: 'repo/:owner/:repoName',
        component: RepoDatas
    }
];
