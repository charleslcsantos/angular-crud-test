import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconEditComponent } from "./icon-edit/icon-edit.component";
import { IconRemoveComponent } from "./icon-remove/icon-remove.component";

const COMPONENTS = [IconEditComponent, IconRemoveComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class IconModule {}
