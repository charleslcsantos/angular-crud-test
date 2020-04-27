import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "../user.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  public canShowDetail = false;

  constructor() {}

  ngOnInit() {}

  openDetail() {
    this.canShowDetail = !this.canShowDetail;
  }
}
