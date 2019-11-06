import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public API: string = 'http://localhost:3000/orders';

  constructor(
    public http: HttpClient
  ) { }

  getAllOrders(): Observable<any> {
    return this.http.get(this.API);
  }

  getOrder(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  addNewOrder(order: Order): Observable<any> {
    return this.http.post(this.API, order);
  }

  editOrder(order: Order): Observable<any> {
    return this.http.put(this.API + '/' + order.id, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
