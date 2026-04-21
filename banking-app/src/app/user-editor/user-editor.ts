import { Component, inject, OnInit, signal } from '@angular/core';
import { UserDTO } from '../../models';
import { FormsModule } from '@angular/forms'
import { UserService } from '../user-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-editor',
  imports: [FormsModule],
  templateUrl: './user-editor.html',
  styleUrl: './user-editor.css',
})
export class UserEditor implements OnInit {
  user = signal<UserDTO>({
    id: 0,
    name: '',
    address: '',
    balance: 0
  });

  isNewUser = true;

  userService = inject(UserService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isNewUser = false;
      this.userService.getOne(id).subscribe({
        next: (user) => this.user.set(user),
        //TODO: error handling
      });
    }
  }

  saveUser() {
    if (this.isNewUser) {
      this.userService.create(this.user()).subscribe({
        next: () => this.router.navigateByUrl('/')
        //TODO: error handling
      });
    } else {
      this.userService.update(this.user()).subscribe({
        next: () => this.router.navigateByUrl('/')
        //TODO: error handling
      });
    }
  }
}
