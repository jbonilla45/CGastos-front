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
  chartOptions!: {};
  Highcharts = Highcharts;

  @Input() count: any[] = [];
  @Input() rubro: any[] = [];

  //@Input() data: any[] = [];
  constructor(private _service: GastoService) {}

  ngOnInit(): void {
    this.get();
    this.obj = this._obj();
    this.chartOptions = {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random DATA',
      },
      subtitle: {
        text: 'DEMO',
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
          pointStart: Date.UTC(2022, 11, 1),
          pointIntervalUnit: 'month',
        },
      },
      // series: this.obj,
      series: [
        {
          data: this.count,
        },
      ],
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  get() {
    this._service.listGastos().subscribe((data: any) => {
      this.draw(data);
    });
  }

  draw(data: any) {
    console.log(data);
    let a = 0;
    let r = 0;
    let e = 0;
    let v = 0;
    let s = 0;
    let t = 0;
    let vi = 0;
    let sa = 0;
    let d = 0;
    let o = 0;
    let c = 0;

    let i;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.rubro == 'Alimentación') {
        a += element.valor;
      } else if (element.rubro == 'Restaurante') {
        o += element.valor;
      } else if (element.rubro == 'Educación') {
        o += element.valor;
      } else if (element.rubro == 'Vestuario') {
        o += element.valor;
      } else if (element.rubro == 'Servicios públicos') {
        o += element.valor;
      } else if (element.rubro == 'Transporte') {
        o += element.valor;
      } else if (element.rubro == 'Vivienda') {
        o += element.valor;
      } else if (element.rubro == 'Salud') {
        o += element.valor;
      } else if (element.rubro == 'Diversión y entretenimiento') {
        o += element.valor;
      } else if (element.rubro == 'Operaciones') {
        o += element.valor;
      } else if (element.rubro == 'Créditos') {
        o += element.valor;
      }
    }
    this.count.push(a);
    this.count.push(r);
    this.count.push(e);
    this.count.push(v);
    this.count.push(s);
    this.count.push(t);
    this.count.push(vi);
    this.count.push(sa);
    this.count.push(d);
    this.count.push(o);
    this.count.push(c);
    console.log(this.count);

    this.chartOptions = {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random DATA',
      },
      subtitle: {
        text: 'DEMO',
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
          pointStart: Date.UTC(2022, 11, 1),
          pointIntervalUnit: 'month',
        },
      },
      // series: this.obj,
      series: [
        {
          data: this.count,
        },
      ],
    };
  }

  obj: any;
  _obj() {
    return [
      {
        name: 'alimentos',
        data: [10, 20, 30, 40],
      },
      {
        name: 'restaurante',
        data: [5, 5, 10, 40],
      },
    ];
  }
}
