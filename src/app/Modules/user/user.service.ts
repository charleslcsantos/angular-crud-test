import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http.service';
import { Observable } from 'rxjs';

export enum EnumUserGender {
  men,
  women
}

export interface IUser {
  avatar: string;
  email: string;
  id?: number;
  name: string;
  phone: string;
  username: string;
  gender: EnumUserGender;
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
      user.avatar = this.generateAvatar(user.gender);

      return this.httpService.post(this.endpoint, user);
    }
  }

  remove(user): Observable<null> {
    return this.httpService.delete(`${this.endpoint}/${user.id}`);
  }

  generateAvatar(gender: EnumUserGender) {
    const avatarUrl = 'https://randomuser.me/api/portraits';

    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const randomNumber = Math.floor(Math.random() * Math.floor(100));

    return `${avatarUrl}/${gender}/${randomNumber}.jpg`;
  }
}
