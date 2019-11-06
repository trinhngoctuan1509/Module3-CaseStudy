import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public API: string = 'http://localhost:3000/customers';

  constructor(
    public http: HttpClient
  ) { }

  getAllCustomer(): Observable<any> {
    return this.http.get(this.API);
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  addNewCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.API, customer);
  }

  editCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.API + '/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
