import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BacalaoComponent } from "./bacalao/bacalao.component";

const routes: Routes = [
  {
    path: "",
    component: BacalaoComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtRouterModule {}
