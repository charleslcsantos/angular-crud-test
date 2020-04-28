import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpRequestInterceptor } from "./http-interceptor/http-request.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertComponent } from "./shared/alert/alert.component";

const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
