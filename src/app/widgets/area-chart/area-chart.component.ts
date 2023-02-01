import { IngresoService } from './../../ingresos/services/ingreso.service';
import { GastoService } from 'src/app/gastos/services/gasto.service';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css'],
})
export class AreaChartComponent implements OnInit {
  chartOptions: any;
  Highcharts = Highcharts;
  dataChart: any[] = [];

  @Input() count: any[] = [];
  @Input() rubro: any[] = [];

  //@Input() data: any[] = [];
  constructor(
    private _service: GastoService,
    private _ingresosService: IngresoService
  ) {}

  ngOnInit(): void {
    this.get();
    //HC_exporting(Highcharts);

    // setTimeout(() => {
    //   window.dispatchEvent(new Event('resize'));
    // }, 300);
  }
  get() {
    this._service.listGastos().subscribe((gastosData: any) => {
      this.find(gastosData, 'Gastos');
      //this._chartOptions();
    });
    this._ingresosService.listIngresos().subscribe((ingresosData: any) => {
      this.find(ingresosData, 'Ingresos');
      this._chartOptions();
    });
    console.log(this.dataChart);
  }

  find(data: any, _name: string) {
    let _a: any[] = [];
    let mes = ['01', '02', '03'];

    // rubro.forEach((item) => {
    mes.forEach((m) => {
      const resultado = data.filter(
        (element: any) =>
          // element.rubro === item &&
          element.fechaCreacion.slice(5, 7) === m
      );
      let a: any[] = [];
      resultado.forEach((element: any) => {
        a.push(element.valor);
      });
      if (a.length > 0) {
        a = a.reduce((a, b) => a + b);
        _a.push(a);
      } else {
        _a.push(0);
      }
      //console.log(resultado);
      //console.log(_a);
    });
    // });
    let res = {
      name: _name,
      data: [_a[0], _a[1], _a[2]],
    };
    this.dataChart.push(res);
  }
  _chartOptions() {
    return (this.chartOptions = {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'area',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 30,
          depth: 200,
        },
      },
      title: {
        text: 'Gastos vs Ingresos',
      },
      subtitle: {
        // text: 'DEMO',
      },

      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}</b></span><br>',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          pointStart: Date.UTC(2022, 12, 1),
          pointIntervalUnit: 'month',
        },
      },
      series: this.dataChart,
    });
  }
}
