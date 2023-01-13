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
    GastosModule
  ]
})
export class DashboardModule { }
