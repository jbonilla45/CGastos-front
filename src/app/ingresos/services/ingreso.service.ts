import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingreso } from '../models/ingreso';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  url = 'https://cgastos-backend-production.up.railway.app/api/ingresos';
  //url = 'http://localhost:4000/api/ingresos'

  constructor(private http: HttpClient) {}

  //create
  createIngreso(ingreso: Ingreso): Observable<any> {
    return this.http.post(this.url, ingreso);
  }
  //read
  //update
  //delete
}
