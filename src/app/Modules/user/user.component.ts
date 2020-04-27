import { Component, OnInit } from "@angular/core";
import { UserService, IUser, EnumUserGender } from "./user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
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
  }

  getUsers() {
    this.userService.getAll().subscribe((users) => (this.users = users));
  }

  async save(user?: IUser) {
    if (!user) {
      user = this.user;
    }

    this.user = await this.userService.save(user).toPromise();

    this.users.push(user);
  }

  edit(user: IUser, index: number) {}

  remove(user: IUser, index: number) {
    this.userService.remove(user).subscribe();

    if (index) {
      this.users.splice(index, 1);
    }
  }

  public compareOptions(option1: EnumUserGender, option2: EnumUserGender) {
    if (option2) {
      return option1 === option2;
    }

    return false;
  }
}
