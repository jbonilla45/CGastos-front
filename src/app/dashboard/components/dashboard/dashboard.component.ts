import { AreaChartComponent } from './../../../widgets/area-chart/area-chart.component';
import { GastoService } from './../../../gastos/services/gasto.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  _listGastos: any;
  _count: any;
  _rubro: any[] = [];
  constructor(
    private _gastosService: GastoService,
  ) {}

  ngOnInit(): void {
    console.log('desde dash');
    this._listGastos = this._gastosService.listGastos();
  }
}
