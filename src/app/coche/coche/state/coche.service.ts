import { Injectable } from "@angular/core";
import { Marcha } from "./marcha";

@Injectable()
export class CocheService {
  constructor() {}

  private readonly VELOCIDAD_MAXIMA = 80;
  private readonly VELOCIDAD_MINIMA = 0;

  private velocidad = 0;
  private numeroMarcha = 1;

  public getVelocidad = () => this.velocidad;

  public getMarchas(): Marcha[] {
    return [1, 2, 3, 4, 5].map(numeroMarcha => this.crearMarcha(numeroMarcha));
  }

  private crearMarcha(numeroMarcha): Marcha {
    const diferenciaMarchas = 15;
    return {
      numeroMarcha: numeroMarcha,
      velocidadMinima: (numeroMarcha - 1) * diferenciaMarchas,
      velocidadMaxima: numeroMarcha * diferenciaMarchas
    };
  }

  public cambiarVelocidad(velocidad: number): number {
    let vel = this.velocidad + velocidad;
    const marcha = this.getMarchas().find(
      i => i.numeroMarcha === this.numeroMarcha
    );
    vel = vel >= marcha.velocidadMaxima ? marcha.velocidadMaxima : vel;
    this.velocidad = vel <= this.VELOCIDAD_MINIMA ? this.VELOCIDAD_MINIMA : vel;
    return this.velocidad;
  }

  public cambiarMarcha(numeroMarcha: number): number {
    this.numeroMarcha = numeroMarcha;
    return this.numeroMarcha;
  }

  public getMarcha() {
    return this.getMarcha;
  }
}
