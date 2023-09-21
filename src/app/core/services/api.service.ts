import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

import { MyResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl!: string;

  // Inyección de dependencias
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.api;
  }

  // Métodos globales para las peticiones HTTP (GET, POST, PATCH, DELETE)
  getAll(path: string): Observable<object> {
    return this.httpClient.get(`${this.apiUrl}/${path}`);
  }

  getById(path: string, id: number | string): Observable<object> {
    return this.httpClient.get(`${this.apiUrl}/${path}/${id}`);
  }

  store(path: string, body: object): Observable<MyResponse<any>> {
    return this.httpClient.post<any>(`${this.apiUrl}/${path}`,body);
  }

  update(path: string, body: object, id: number | string): Observable<object> {
    return this.httpClient.patch(`${this.apiUrl}/${path}/${id}`,body);
  }

  delete(path: string, id: number | string): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${path}/${id}`);
  }

}
