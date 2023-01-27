import { GastoService } from 'src/app/gastos/services/gasto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartComponent } from './area-chart/area-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AreaChartComponent, CardComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [AreaChartComponent, CardComponent],
})
export class WidgetsModule {}
