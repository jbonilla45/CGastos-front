import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Gasto } from '../../models/gasto';
import { GastoService } from '../../services/gasto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  gastoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _gastoService: GastoService
  ) {
    this.gastoForm = this.fb.group({
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      rubro: ['', Validators.required],
      establecimiento: ['', Validators.required],
      valor: [0, Validators.required],
      impuesto: [0],
      descuento: [0],
    });
  }

  createGasto() {
    const GASTO: Gasto = {
      descripcion: this.gastoForm.get('descripcion')?.value,
      tipo: this.gastoForm.get('tipo')?.value,
      rubro: this.gastoForm.get('rubro')?.value,
      establecimiento: this.gastoForm.get('establecimiento')?.value,
      valor: this.gastoForm.get('valor')?.value,
      impuesto: this.gastoForm.get('impuesto')?.value,
      descuento: this.gastoForm.get('descuento')?.value,
    };

    console.log(GASTO);
    this._gastoService.createGasto(GASTO).subscribe({
      next: () => {
        this.toastr.success(
          'El registro se creó con éxito!',
          'Gasto registrado!'
        );
        this.gastoForm.reset();
      },
      error: (error) => {
        console.log(error);
        this.gastoForm.reset();
      },
    });
  }
}
