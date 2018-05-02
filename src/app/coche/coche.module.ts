import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CocheRoutingModule } from "./coche-routing.module";
import { CocheComponent } from "./coche/coche.component";
import { SalpicaderoComponent } from "./coche/salpicadero/salpicadero.component";
import { PedaleraComponent } from "./coche/pedalera/pedalera.component";
import { CajaCambiosComponent } from "./coche/caja-cambios/caja-cambios.component";
import { CocheService } from "./coche/state/coche.service";

@NgModule({
  imports: [CommonModule, CocheRoutingModule],
  declarations: [
    CocheComponent,
    SalpicaderoComponent,
    PedaleraComponent,
    CajaCambiosComponent
  ],
  providers: [CocheService]
})
export class CocheModule {}
