import { Component, OnInit } from "@angular/core";
import { Marcha } from "./state/marcha";
import { CocheService } from "./state/coche.service";

@Component({
  selector: "cmd-coche",
  templateUrl: "./coche.component.html",
  styleUrls: ["./coche.component.css"]
})
export class CocheComponent implements OnInit {
  public velocidad = 0;
  public marchas: Marcha[];
  public numeroMarcha = 1;

  constructor(private cocheService: CocheService) {}

  ngOnInit() {
    this.marchas = this.cocheService.getMarchas();
  }

  public acelerar = (velocidadAumentar: number) => {
    this.velocidad = this.cocheService.cambiarVelocidad(velocidadAumentar);
  };

  public frenar = (velocidadReducir: number) => {
    this.velocidad = this.cocheService.cambiarVelocidad(-velocidadReducir);
  };

  public cambiarMarcha = (numeroMarcha: number) => {
    this.numeroMarcha = this.cocheService.cambiarMarcha(numeroMarcha);
  };
}
