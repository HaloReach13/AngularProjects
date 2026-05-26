import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GithubService } from '../services/github-service';
import { GithubUser, GithubRepo } from '../models';

@Component({
  selector: 'app-user-datas',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-datas.html',
  styleUrl: './user-datas.css',
})
export class UserDatas implements OnInit {
  route = inject(ActivatedRoute);
  githubService = inject(GithubService);

  user = signal<GithubUser | null>(null);
  repos = signal<GithubRepo[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');
      
      if (username) {
        this.githubService.getUser(username).subscribe({
          next: (userData) => {
            this.user.set(userData);
            
            this.githubService.getUserRepos(username).subscribe({
              next: (repoData) => {
                this.repos.set(repoData);
              },
              error: (err) => {
                console.error(err);
              }
            });
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
    });
  }
}