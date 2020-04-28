import { Component } from "@angular/core";
import { AlertService, IAlert } from "./services/Alert/alert.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public alerts: IAlert[] = [];

  constructor(private alertService: AlertService) {
    this.alerts = this.alertService.alerts;
  }
}
