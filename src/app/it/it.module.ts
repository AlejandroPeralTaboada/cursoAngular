import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AceiteComponent } from "./aceite/aceite.component";
import { ItRouterModule } from "./it-router.module";

@NgModule({
  imports: [ItRouterModule, CommonModule],
  declarations: [AceiteComponent],
  exports: [AceiteComponent]
})
export class ItModule {}
