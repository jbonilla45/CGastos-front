import { GastoService } from 'src/app/gastos/services/gasto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartComponent } from './area-chart/area-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
  ],
  exports: [
    AreaChartComponent
  ],
})
export class WidgetsModule { }
