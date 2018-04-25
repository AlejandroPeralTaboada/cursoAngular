import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HuevoComponent } from "./huevo/huevo.component";
import { TortillaComponent } from "./tortilla/tortilla.component";
import { ItModule } from "../it/it.module";
import { PtModule } from "../pt/pt.module";
import { ListComponent } from "./list/list.component";
import { EsRoutingModule } from "./es-routing.module";

@NgModule({
  imports: [EsRoutingModule, CommonModule, ItModule, PtModule],
  declarations: [HuevoComponent, TortillaComponent, ListComponent],
  exports: [TortillaComponent]
})
export class EsModule {}
