import { AreaChartComponent } from './../widgets/area-chart/area-chart.component';
import { GastoService } from './../gastos/services/gasto.service';
import { WidgetsModule } from './../widgets/widgets.module';
import { GastosModule } from './../gastos/gastos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    GastosModule,
    WidgetsModule
  ],
  providers:[GastoService]
})
export class DashboardModule { }
