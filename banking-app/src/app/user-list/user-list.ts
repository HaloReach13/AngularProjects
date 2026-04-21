import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../user-service';
import { UserDTO } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users = signal<UserDTO[]>([]);
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users.set(users),
      error: (err) => {
        alert('Hiba az ügyfelek betöltésekor.');
        console.error(err);
      }
    });
  }

  deleteUser(user: UserDTO) {
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.users.update((users) => users.filter(u => u.id != user.id));
      },
      error: (err) => {
        alert('Hiba az ügyfél törlésekor!');
        console.error(err);
      }
    });
  }

  editUser(user: UserDTO) {
    this.router.navigate([ 'edit-user/', user.id ]);
  }
}
