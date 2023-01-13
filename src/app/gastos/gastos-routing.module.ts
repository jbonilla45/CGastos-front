import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  // {
  //   path: 'create',
  //   component: CreateComponent,
  // },
  // {
  //   path: '',
  //   component: ListComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosRoutingModule {}
