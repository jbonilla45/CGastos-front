import { IngresoService } from './../../ingresos/services/ingreso.service';
import { Component } from '@angular/core';
import { GastoService } from 'src/app/gastos/services/gasto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  totalGastos: number = 0;
  totalGastosMes: number = 0;
  totalIngresos: number = 0;
  totalIngresosMes: number = 0;

  constructor(
    private _gastoService: GastoService,
    private _ingresoService: IngresoService
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._gastoService.listGastos().subscribe((data: any) => {
      //this.draw(data);
      this._totalGastos(data);
      this._totalGastosMes(data);
    });
    this._ingresoService.listIngresos().subscribe((data: any) => {
      this._totalIngresos(data);
      this._totalIngresosMes(data);
    });
  }
  //funciones total gastos

  _totalGastos(data: any) {
    data.forEach((element: any) => {
      this.totalGastos += element.valor;
    });
  }
  _totalGastosMes(data: any) {
    //let mes: any = '01';
    let mes = new Date().toISOString().slice(5, 7);
    //console.log(mes);
    const resultado = data.filter(
      (element: any) => element.fechaCreacion.slice(5, 7) === mes
    );
    resultado.forEach((element: any) => {
      this.totalGastosMes += element.valor;
    });
  }
  
  //funciones total ingresos

  _totalIngresos(data: any) {
    data.forEach((element: any) => {
      this.totalIngresos += element.valor;
    });
  }
  _totalIngresosMes(data: any) {
    let mes: any = new Date().toISOString().slice(5, 7);
    //let mes = '01';
    const resultado = data.filter(
      (element: any) => element.fechaCreacion.slice(5, 7) === mes
    );
    resultado.forEach((element: any) => {
      this.totalIngresosMes += element.valor;
    });
  }
}
