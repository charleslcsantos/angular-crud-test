import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/HttpService/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-crud-test';

  constructor(
    private httpService: HttpService
  ) {

  }

  ngOnInit() {
    this.httpService.get('users').subscribe(r => console.log('r>>>>', r));
  }
}
