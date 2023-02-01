import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { GastoService } from 'src/app/gastos/services/gasto.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  chartOptions!: {};
  Highcharts = Highcharts;
  dataChart: any;

  constructor(private _gastoService: GastoService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._gastoService.listGastos().subscribe((data: any) => {
      this.find(data);
      this._chartOptions();
    });
  }
  find(data: any) {
    let _a: any[] = [];
    let rubro = [
      'Alimentación',
      'Restaurante',
      'Educación',
      'Operaciones',
      'Servicios públicos',
      'Diversión y entretenimiento',
      'Créditos',
    ];
    //let mes = '01';
    let mes = new Date().toISOString().slice(5, 7);
    rubro.forEach((item) => {
      const resultado = data.filter(
        (element: any) =>
          element.rubro === item && element.fechaCreacion.slice(5, 7) === mes
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
    this.dataChart = [
      {
        name: 'Alimentación',
        y: _a[0],
      },
      {
        name: 'Restaurante',
        y: _a[1],
      },
      {
        name: 'Educación',
        y: _a[2],
      },
      {
        name: 'Operaciones',
        y: _a[3],
      },
      {
        name: 'Servicios públicos',
        y: _a[4],
      },
      {
        name: 'Diversión y entretenimiento',
        y: _a[5],
      },
      {
        name: 'Créditos',
        y: _a[6],
      },
    ];
  }

  _chartOptions() {
    return (this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Distribución gastos último mes',
        align: 'center',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        enabled: false,
        point: {
          valueSuffix: '%',
        },
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: this.dataChart,
        },
      ],
    });
  }
}
