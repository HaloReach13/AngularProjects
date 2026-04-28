import { Component, inject, OnInit, signal } from '@angular/core';
import { BankTransferDTO, UserDTO } from '../../../models';
import { UserService } from '../services/user-service';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-editor',
  imports: [FormsModule],
  templateUrl: './transaction-editor.html',
  styleUrl: './transaction-editor.css',
})
export class TransactionEditor implements OnInit {
  transaction = signal<BankTransferDTO>({
    id: 0,
    amount: 0,
    sender: { id: 0 } as UserDTO,
    receiver: { id: 0 } as UserDTO
  })

  users = signal<UserDTO[]>([]);

  userService = inject(UserService);
  transactionService = inject(TransactionService);
  router = inject(Router);

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users.set(users),
      error: (err) => console.error(err)
    });
  }

  saveTransaction() {
    this.transactionService.create(this.transaction()).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        console.error(err);

        const message = err.error.error;
        alert(message ? message : 'Nem várt hiba a létrehozás során');
      }
    })
  }
}
