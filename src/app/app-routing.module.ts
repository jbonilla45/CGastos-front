import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './gastos/components/create/create.component';
import { ListComponent } from './gastos/components/list/list.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule,
  //   ),
  // },
  // {
  //   path: 'gastos',
  //   loadChildren: () =>
  //     import('./gastos/gastos.module').then((mod) => mod.GastosModule),
  // },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  // },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
