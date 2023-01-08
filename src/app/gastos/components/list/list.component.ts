import { GastoService } from './../../services/gasto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
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
  ];

  //array de datos inicializado
  dataSource: any = new MatTableDataSource<any>([]);

  constructor(private _gastoService: GastoService) {}

  ngOnInit(): void {
    console.log(this.dataSource);
    this._listGastos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //funciones angular
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //funciones locales
  _listGastos() {
    this._gastoService.listGastos().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        console.log(data);
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}