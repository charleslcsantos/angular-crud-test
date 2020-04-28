import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "../user.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  userBackup: IUser;
  public canShowDetail = false;
  public canEditUser = false;

  constructor() {}

  ngOnInit() {
    this.userBackup = { ...this.user };
  }

  openDetail() {
    this.canShowDetail = !this.canShowDetail;
  }

  edit(user: IUser) {
    if (user) {
      this.user = user;
    } else {
      this.user = this.userBackup;
    }
    this.canEditUser = !this.canEditUser;
  }
}
