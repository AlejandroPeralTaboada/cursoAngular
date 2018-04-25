import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BacalaoComponent } from "./bacalao/bacalao.component";
import { PtRouterModule } from "./pt-router.module";

@NgModule({
  imports: [CommonModule, PtRouterModule],
  declarations: [BacalaoComponent],
  exports: [BacalaoComponent]
})
export class PtModule {}
