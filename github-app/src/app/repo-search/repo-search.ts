import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GithubService } from '../services/github-service';
import { GithubRepo } from '../models';

@Component({
  selector: 'app-repo-search',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './repo-search.html',
  styleUrl: './repo-search.css',
})
export class RepoSearch {
  githubService = inject(GithubService)
  repos = signal<GithubRepo[]>([])
  searchRepo: string = ''

  onSearch() {
    if (!this.searchRepo.trim()) return;

    this.githubService.searchRepos(this.searchRepo).subscribe({
      next: (repos) => {
        this.repos.set(repos.items);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
