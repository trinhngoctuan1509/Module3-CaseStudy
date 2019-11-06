import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetail } from '../models/orderDetail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  public API: string = 'http://localhost:3000/orderDetails';

  constructor(public http: HttpClient) { }

  getAllOrderDetails(): Observable<any> {
    return this.http.get(this.API);
  }

  getOrderDetail(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  addNewOrderDetail(orderDetail: OrderDetail): Observable<any> {
    return this.http.post(this.API, orderDetail);
  }

  editOrderDetail(orderDetail: OrderDetail): Observable<any> {
    return this.http.put(this.API + '/' + orderDetail.id, orderDetail);
  }

  deleteOrderDetail(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
