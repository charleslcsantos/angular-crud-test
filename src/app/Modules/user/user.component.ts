import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: Observable<IUser[]> = null;
  public user: IUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getAll();
  }

  async save(user?: IUser) {
    if (!user) {
      user = this.user;
    }

    await this.userService.save(user).toPromise();
    this.getUsers();
  }

}
