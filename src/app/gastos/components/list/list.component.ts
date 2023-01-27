import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GastoService } from '../../services/gasto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //decoradores funciones de tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //columnas
  displayedColumns: string[] = [
    'fechaCreacion',
    'descripcion',
    'tipo',
    'rubro',
    'establecimiento',
    'valor',
    'impuesto',
    'descuento',
    'acciones',
  ];

  //array de datos inicializado
  @Input() listGastos: any = new MatTableDataSource<any>([]);

  constructor(
    private _gastoService: GastoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    //console.log('desde list')
    //console.log(this.listGastos.data);
    this._listGastos();
  }

  ngAfterViewInit() {
    this.listGastos.paginator = this.paginator;
    this.listGastos.sort = this.sort;
  }

  //funciones angular
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listGastos.filter = filterValue.trim().toLowerCase();

    if (this.listGastos.paginator) {
      this.listGastos.paginator.firstPage();
    }
  }

  //funciones locales
  _listGastos() {
    this._gastoService.listGastos().subscribe({
      next: (data) => {
        this.listGastos.data = data;
        //console.log(data);
        console.log(this.listGastos.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: any) {
    this._gastoService.deleteGasto(id).subscribe({
      next: () => {
        this.toastr.error('registro eliminado!');
        this._listGastos();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
