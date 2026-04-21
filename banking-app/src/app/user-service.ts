import { HttpClient } from '@angular/common/http';
import { inject ,Injectable } from '@angular/core';
import { UserDTO } from "../models"

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getAll() {
    return this.http.get<UserDTO[]>('/api/user');
  }

  getOne(id: number) {
    return this.http.get<UserDTO[]>('/api/user/' + id);
  }

  delete(id: number) {
    return this.http.delete('/api/user/' + id);
  }

  create(user: UserDTO) {
    return this.http.post('/api/user', user);
  }
  
  update(user: UserDTO) {
    return this.http.put('/api/user', user);
  }
}
