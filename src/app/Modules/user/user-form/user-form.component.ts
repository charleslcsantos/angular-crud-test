import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { IUser, EnumUserGender, UserService } from "../user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Output() onClickCancel?: EventEmitter<boolean> = new EventEmitter();
  @Output() onClickSave?: EventEmitter<boolean> = new EventEmitter();

  @Input() user: IUser = {
    avatar: "",
    email: "",
    name: "",
    phone: "",
    username: "",
    gender: EnumUserGender.men,
  };

  constructor(private userService: UserService) {}

  ngOnInit() {}

  cancel() {
    if (this.onClickCancel) {
      this.onClickCancel.emit();
    }
  }

  save(user?: IUser) {
    if (!user) {
      user = this.user;
    }

    this.userService
      .save(user)
      .then(() => {
        this.onClickSave.emit();
      })
      .catch(() => {});
  }
}
