import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BankTransferDTO } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  http = inject(HttpClient);

  create(transaction: BankTransferDTO) {
    return this.http.post<BankTransferDTO>('/api/transaction', transaction);
  }
}
