import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http.service';
import { Observable } from 'rxjs';

export interface IUser {
  avatar: string;
  email: string;
  id?: number;
  name: string;
  phone: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'users';

  constructor(private httpService: HttpService) { }

  getAll(): Observable<IUser[]> {
    return this.httpService.get(this.endpoint);
  }

  save(user: IUser): Observable<IUser> {
    if (user.id) {
      return this.httpService.put(`${this.endpoint}/${user.id}`, user);
    } else {
      return this.httpService.post(this.endpoint, user);
    }
  }

  remove(user): Observable<null> {
    return this.httpService.delete(`${this.endpoint}/${user.id}`);
  }
}
