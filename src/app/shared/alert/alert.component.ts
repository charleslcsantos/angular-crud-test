import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { IAlert, AlertService } from "src/app/services/Alert/alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
  @Input() alert: IAlert = new IAlert();
  @Output() close: EventEmitter<IAlert> = new EventEmitter<IAlert>();

  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  public closeAlert() {
    this.close.next(this.alert);
    this.alertService.removeAlert(this.alert);
  }

  public getAlertIcon() {
    switch (this.alert.type) {
      case "success":
        return "check";
      case "danger":
        return "x";

      default:
        return this.alert.type;
    }
  }
}
