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

  constructor(private _service: GastoService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._service.listGastos().subscribe((data: any) => {
      //this.draw(data);
      this.total(data);
      this._totalMes(data);
    });
  }

  total(data: any) {
    data.forEach((element: any) => {
      this.totalGastos += element.valor;
    });
  }
  _totalMes(data: any) {
    let mes: any = new Date().toISOString().slice(5, 7);
    const resultado = data.filter(
      (element: any) => element.fechaCreacion.slice(5, 7) === mes
    );
    resultado.forEach((element: any) => {
      this.totalGastosMes += element.valor;
    });
  }
}
