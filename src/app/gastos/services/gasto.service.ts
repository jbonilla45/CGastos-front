import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  url = 'https://cgastos-backend-production.up.railway.app/api/gastos';

  constructor(private http: HttpClient) {}

  createGasto(gasto: Gasto): Observable<any> {
    return this.http.post(this.url, gasto);
  }

  listGastos(): Observable<any> {
    return this.http.get(this.url);
  }

  updateGasto() {}

  getGasto() {
    return this.http.get(this.url);
  }

  deleteGasto() {}
}
