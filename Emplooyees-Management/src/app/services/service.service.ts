import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public API: string = 'http://localhost:3000/services';

  constructor(
    public http: HttpClient
  ) { }

  getAllServices(): Observable<any> {
    return this.http.get(this.API);
  }

  getService(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  addNewService(service: Service): Observable<any> {
    return this.http.post(this.API, service);
  }

  editService(service: Service): Observable<any> {
    return this.http.put(this.API + '/' + service.id, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
