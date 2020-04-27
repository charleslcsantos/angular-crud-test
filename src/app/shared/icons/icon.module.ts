import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconEditComponent } from "./icon-edit/icon-edit.component";
import { IconRemoveComponent } from "./icon-remove/icon-remove.component";
import { IconArrowComponent } from "./icon-arrow/icon-arrow.component";

const COMPONENTS = [IconEditComponent, IconRemoveComponent, IconArrowComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class IconModule {}
