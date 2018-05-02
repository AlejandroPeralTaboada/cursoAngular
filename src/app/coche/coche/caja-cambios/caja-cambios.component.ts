import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Marcha } from "../state/marcha";

@Component({
  selector: "cmd-caja-cambios",
  templateUrl: "./caja-cambios.component.html",
  styleUrls: ["./caja-cambios.component.css"]
})
export class CajaCambiosComponent implements OnInit {
  @Input() marchas: Marcha[];
  @Input() velocidad;
  @Output() public cambiarMarcha = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  public puedoCambiarMarcha = (marcha: Marcha) => {
    return (
      this.velocidad >= marcha.velocidadMinima &&
      this.velocidad <= marcha.velocidadMaxima
    );
  };
}
