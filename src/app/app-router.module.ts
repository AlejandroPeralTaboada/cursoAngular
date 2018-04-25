import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "spain",
    loadChildren: "./es/es.module#EsModule"
  },
  {
    path: "italy",
    loadChildren: "./it/it.module#ItModule"
  },
  {
    path: "portugal",
    loadChildren: "./pt/pt.module#PtModule"
  },
  {
    path: "**",
    redirectTo: "spain"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
