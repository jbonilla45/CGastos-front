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
    //this.obj = this._obj();
    /*     this.chartOptions = {
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
      series: this.obj,
      // series: [
      //   {
      //     data: this.count,
      //   },
      // ],
    };
 */ HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  get() {
    this._service.listGastos().subscribe((data: any) => {
      //this.draw(data);
      this.find(data);
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

    let _a = [];
    //_a.push(a);
    let _r = [];
    //_r.push(r);
    let _o = [];

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.rubro == 'Alimentación') {
        a = element.valor;
        _a.push(a);
      } else if (element.rubro == 'Restaurante') {
        r = element.valor;
        _r.push(r);
      } else if (element.rubro == 'Educación') {
        e += element.valor;
      } else if (element.rubro == 'Vestuario') {
        v += element.valor;
      } else if (element.rubro == 'Servicios públicos') {
        s += element.valor;
      } else if (element.rubro == 'Transporte') {
        t += element.valor;
      } else if (element.rubro == 'Vivienda') {
        vi += element.valor;
      } else if (element.rubro == 'Salud') {
        sa += element.valor;
      } else if (element.rubro == 'Diversión y entretenimiento') {
        d += element.valor;
      } else if (element.rubro == 'Operaciones') {
        o = element.valor;
        _o.push(o);
      } else if (element.rubro == 'Créditos') {
        c += element.valor;
      }
    }
    let obj = [
      {
        name: 'Alimentación',
        data: _a,
      },
      {
        name: 'Restaurante',
        data: _r,
      },
      {
        name: 'Operaciones',
        data: _o,
      },
    ];

    data.forEach((element: any) => {
      console.log(element.fechaCreacion.slice(5, 7));
    });
    console.log(this.obj);
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
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 30,
          depth: 200,
        },
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
      // xAxis: {
      //   type: 'datetime',
      // },
      //plotOptions: {
      //series: {
      //pointStart: Date.UTC(2022, 11, 1),
      //pointIntervalUnit: 'month',
      //},
      // },
      series: this.obj,
      // series: [
      //   {
      //     data: this.count,
      //   },
      // ],
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

  find(data: any) {
    let _a: any[] = [];

    let rubro = ['Alimentación', 'Restaurante', 'Educación', 'Operaciones'];
    let mes = ['01', '02', '03'];

    rubro.forEach((item) => {
      mes.forEach((m) => {
        const resultado = data.filter(
          (element: any) =>
            element.rubro === item && element.fechaCreacion.slice(5, 7) === m
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
    });
    this.obj = [
      {
        name: 'Alimentación',
        data: [_a[0], _a[1], _a[2]],
      },
      {
        name: 'Restaurante',
        data: [_a[3], _a[4], _a[5]],
      },
      {
        name: 'Educación',
        data: [_a[6], _a[7], _a[8]],
      },
      {
        name: 'Operaciones',
        data: [_a[9], _a[10], _a[11]],
      },
    ];
    this.chartOptions = {
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
          pointStart: Date.UTC(2022, 12, 1),
          pointIntervalUnit: 'month',
        },
      },
      series: this.obj,
      // series: [
      //   {
      //     data: this.count,
      //   },
      // ],
    };
  }
}
