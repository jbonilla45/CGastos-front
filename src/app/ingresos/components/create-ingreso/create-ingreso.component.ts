import { Ingreso } from './../../models/ingreso';
import { IngresoService } from './../../services/ingreso.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-ingreso',
  templateUrl: './create-ingreso.component.html',
  styleUrls: ['./create-ingreso.component.css']
})
export class CreateIngresoComponent {
  ingresoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _ingresoService: IngresoService,
    private router: Router
  ) {
    this.ingresoForm = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      valor: [0],
    });
  }
  createIngreso() {
    const INGRESO: Ingreso = {
      origen: this.ingresoForm.get('origen')?.value,
      destino: this.ingresoForm.get('destino')?.value,
      valor: this.ingresoForm.get('valor')?.value,
    };

    this._ingresoService.createIngreso(INGRESO).subscribe({
      next: () => {
        this.toastr.success('Ingreso registrado!');
        this.ingresoForm.reset();
      },
      error: (error) => {
        console.log(error);
        this.ingresoForm.reset();
      },
    });
  }
}
