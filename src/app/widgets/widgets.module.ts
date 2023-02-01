import { GastoService } from 'src/app/gastos/services/gasto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartComponent } from './area-chart/area-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [AreaChartComponent, CardComponent, PieChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [AreaChartComponent, CardComponent, PieChartComponent],
})
export class WidgetsModule {}
