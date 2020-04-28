import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/HttpService/http.service";
import { Observable, Subject } from "rxjs";
import { AlertService } from "src/app/services/Alert/alert.service";
import { map } from "rxjs/operators";

export enum EnumUserGender {
  men = "men",
  women = "women",
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
  providedIn: "root",
})
export class UserService {
  endpoint = "users";
  users: IUser[] = [];
  users$: Subject<IUser[]> = new Subject();

  constructor(
    private httpService: HttpService,
    private alertService: AlertService
  ) {}

  getAll(): Observable<IUser[]> {
    return this.httpService
      .get(this.endpoint)
      .pipe(map((users: IUser[]) => (this.users = users)));
  }

  async save(user: IUser): Promise<IUser> {
    let request;

    if (user.id) {
      request = await this.httpService
        .put(`${this.endpoint}/${user.id}`, user)
        .toPromise();
      this.alertService.alert(`O usuário ${user.name} foi alterado`, "success");
    } else {
      if (user.gender) {
        user.avatar = await this.generateAvatar(user.gender);

        request = await this.httpService.post(this.endpoint, user).toPromise();
        this.alertService.alert(`O usuário ${user.name} foi criado`, "success");
      } else {
        this.alertService.alert(`Você precisa selecionar um gênero`);
        throw new Error("Genero nao selecionado");
      }
    }

    return request;
  }

  async remove(user: IUser, index: number): Promise<any> {
    let request;
    request = await this.httpService
      .delete(`${this.endpoint}/${user.id}`)
      .toPromise();

    this.alertService.alert(`O usuário ${user.name} foi deletado`, "success");

    this.users.splice(index, 1);
    this.users$.next(this.users);

    return request;
  }

  generateAvatar(gender: EnumUserGender): Promise<any> {
    return new Promise((resolve) => {
      const avatarUrl = "https://randomuser.me/api/portraits";

      // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      const randomNumber = Math.floor(Math.random() * Math.floor(100));

      resolve(`${avatarUrl}/${gender}/${randomNumber}.jpg`);
    });
  }
}
