import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GithubService } from '../services/github-service';
import { GithubUser } from '../models';

@Component({
  selector: 'app-user-search',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',
})
export class UserSearch {
  githubService = inject(GithubService);
  users = signal<GithubUser[]>([]);
  searchUser: string = '';

  onSearch() {
    if (!this.searchUser.trim()) return;

    this.githubService.searchUsers(this.searchUser).subscribe({
      next: (users) => {
        this.users.set(users.items);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
