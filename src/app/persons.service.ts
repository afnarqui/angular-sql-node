import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  url = environment.URL_SERVICIOS_LOCALES;

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(`${this.url}persona`)
  }
  guardar(persona: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url + 'persona/', JSON.stringify(persona), {headers})
  }
  actualizar(persona: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.url}/persona/`, persona, { headers });
  }
}
