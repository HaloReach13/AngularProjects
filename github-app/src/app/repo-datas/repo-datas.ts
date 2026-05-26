import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GithubService } from '../services/github-service';
import { GithubRepo } from '../models';

@Component({
  selector: 'app-repo-datas',
  imports: [CommonModule, RouterModule],
  templateUrl: './repo-datas.html',
  styleUrl: './repo-datas.css',
})
export class RepoDatas implements OnInit {
  route = inject(ActivatedRoute);
  githubService = inject(GithubService);

  repo = signal<GithubRepo | null>(null);

  ngOnInit() {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repoName = this.route.snapshot.paramMap.get('repoName');

    if (owner && repoName) {
      this.githubService.getRepo(owner, repoName).subscribe({
        next: (repoData) => {
          this.repo.set(repoData);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
