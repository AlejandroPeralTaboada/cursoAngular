import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AceiteComponent } from "./aceite/aceite.component";

const routes: Routes = [
  {
    path: "",
    component: AceiteComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItRouterModule {}
