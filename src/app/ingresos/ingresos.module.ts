import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIngresoComponent } from './components/create-ingreso/create-ingreso.component';

import { ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CreateIngresoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class IngresosModule { }
