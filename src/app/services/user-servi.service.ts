import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiService {

  constructor(private http: HttpClient) { }

  // Trayendo la url de la api
  urlBase = environment.Api_url + 'users'

  // metodo get
  metodoGet(): Observable<string>{
    return this.http.get<string>(this.urlBase);
  }
}
