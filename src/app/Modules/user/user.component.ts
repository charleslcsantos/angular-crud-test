import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: IUser[] = null;
  public user: IUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  async save(user?: IUser) {
    if (!user) {
      user = this.user;
    }

    await this.userService.save(user).toPromise();

    this.users.push(user);
  }

  remove(user: IUser, index: number) {
    this.userService.remove(user);

    if (index) {
      this.users.splice(index, 1);
    }
  }

}
