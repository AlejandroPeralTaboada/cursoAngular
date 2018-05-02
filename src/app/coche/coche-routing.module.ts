import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CocheComponent } from "./coche/coche.component";

const routes: Routes = [
  {
    path: "",
    component: CocheComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocheRoutingModule {}
