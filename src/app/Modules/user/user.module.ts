import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { FormsModule } from "@angular/forms";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { IconModule } from "src/app/shared/icons/icon.module";

@NgModule({
  declarations: [UserComponent, UserFormComponent, UserCardComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule, IconModule],
})
export class UserModule {}
