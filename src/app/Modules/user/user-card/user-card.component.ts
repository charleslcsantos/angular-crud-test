import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../user.service";
import { Animation } from "src/app/shared/animations";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
  animations: [Animation.fadeTopToDown],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  @Output() onClickRemove: EventEmitter<boolean> = new EventEmitter();
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

  remove(user: IUser) {
    this.onClickRemove.emit();
  }
}
