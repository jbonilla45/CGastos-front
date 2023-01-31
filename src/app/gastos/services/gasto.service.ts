import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  url = 'https://cgastos-backend-production.up.railway.app/api/gastos';
  //url = 'http://localhost:4000/api/gastos'

  constructor(private http: HttpClient) {}

  createGasto(gasto: Gasto): Observable<any> {
    return this.http.post(this.url, gasto);
  }

  listGastos(): Observable<any> {
    return this.http.get(this.url);
  }

  updateGasto() {}

  getGasto(id: string) {
    return this.http.get(this.url + id);
  }

  deleteGasto(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
  chartOptions: any;
  count: any[] = [];
}
