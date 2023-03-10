import { DashboardComponent } from './../dashboard/components/dashboard/dashboard.component';
import { DashboardModule } from './../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GastoService } from '../gastos/services/gasto.service';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [NavbarComponent, SidebarComponent],
  providers:[GastoService]
})
export class HomeModule {}
