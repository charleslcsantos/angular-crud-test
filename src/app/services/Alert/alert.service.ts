import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class IAlert {
  public message: String;
  public type: String;
  public title?: String;
}

@Injectable({
  providedIn: "root",
})
export class AlertService {
  public alerts = Array<IAlert>();
  private alertSource = new Subject<IAlert>();
  public alert$ = this.alertSource.asObservable();

  public alert(
    message: String,
    type: "success" | "warning" | "danger" | "info" = "info"
  ) {
    const newAlert: IAlert = {
      message: message,
      type: type,
    };

    this.alerts.push(newAlert);

    if (this.alerts && this.alerts.length === 4) {
      this.alerts.splice(0, 1);
    }
    setTimeout(() => {
      this.alerts.splice(0, 1);
    }, 7000);

    this.alertSource.next(newAlert);
  }

  public removeAlert(alert: IAlert) {
    const index = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
