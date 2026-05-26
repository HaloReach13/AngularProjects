import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUser, GithubUserSearch, GithubRepo, GithubRepoSearch } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  http = inject(HttpClient);
  baseUrl = 'https://api.github.com';

  searchUsers(username: string) {
    return this.http.get<GithubUserSearch>(`${this.baseUrl}/search/users?q=${username}`);
  }

  getUser(username: string) {
    return this.http.get<GithubUser>(`${this.baseUrl}/users/${username}`);
  }

  getUserRepos(username: string) {
    return this.http.get<GithubRepo[]>(`${this.baseUrl}/users/${username}/repos`);
  }

  searchRepos(reponame: string) {
    return this.http.get<GithubRepoSearch>(`${this.baseUrl}/search/repositories?q=${reponame}`);
  }

  getRepo(username: string, reponame: string) {
    return this.http.get<GithubRepo>(`${this.baseUrl}/repos/${username}/${reponame}`);
  }
}
