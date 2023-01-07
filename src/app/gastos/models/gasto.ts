export class Gasto {
  _id?: number;
  descripcion: string;
  tipo: string;
  rubro: string;
  establecimiento: string;
  valor: number;
  impuesto: number;
  descuento: number;

  constructor(
    descripcion: string,
    tipo: string,
    rubro: string,
    establecimiento: string,
    valor: number,
    impuesto: number,
    descuento: number
  ) {
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.rubro = rubro;
    this.establecimiento = establecimiento;
    this.valor = valor;
    this.impuesto = impuesto;
    this.descuento = descuento;
  }
}
