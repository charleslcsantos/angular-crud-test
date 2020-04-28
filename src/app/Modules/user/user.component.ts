import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService, IUser, EnumUserGender } from "./user.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit, OnDestroy {
  _destroyed$ = new Subject();
  public users: IUser[] = null;
  public user: IUser = {
    avatar: "",
    email: "",
    name: "",
    phone: "",
    username: "",
    gender: EnumUserGender.men,
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();

    this.userService.users$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((updatedUsers) => {
        this.users = updatedUsers;
      });
  }

  getUsers() {
    this.userService
      .getAll()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((users) => (this.users = users));
  }

  async save(user?: IUser) {
    if (!user) {
      user = this.user;
    }

    this.users.push(user);
    this.user = {
      avatar: "",
      email: "",
      name: "",
      phone: "",
      username: "",
      gender: EnumUserGender.men,
    };
  }

  async remove(user: IUser, index: number) {
    await this.userService.remove(user, index);
  }

  public compareOptions(option1: EnumUserGender, option2: EnumUserGender) {
    if (option2) {
      return option1 === option2;
    }

    return false;
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
