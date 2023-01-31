export class Ingreso {
  _id?: number;
  fechaCreacion?: Date;
  origen: string;
  destino: string;
  valor: number;

  constructor(origen: string, destino: string, valor: number) {
    this.origen = origen;
    this.destino = destino;
    this.valor = valor;
  }
}
