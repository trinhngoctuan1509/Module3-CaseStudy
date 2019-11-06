import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public searchKeyword;
  public subscription: Subscription;
  public subscriptionDeleteOrder: Subscription;
  public API: string = 'http://localhost:3000/orders';
  public orders;
  public idForDelete;
  public totalMoneyOfAllService:number = 0;

  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
      for(var i=0;i<this.orders.length;i++){
        this.totalMoneyOfAllService = this.totalMoneyOfAllService + this.orders[i].totalMoney;
      }
      console.log(this.totalMoneyOfAllService);
    });
  }

  deleteOrder() {
    this.subscription = this.orderService.deleteOrder(this.idForDelete).subscribe(data => {
      this.orderService.getAllOrders().subscribe(data => {
        this.orders = data;
      })
    })
  }

  searchOrder() {
    var searchResultsId = [];
    var searchResults = [];

    // Tìm kiếm tất cả ID trong mảng Employees thỏa mãn điều kiện
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].customerCode.match(this.searchKeyword)) {
        searchResultsId.push(i);
      }
    }

    // Từ các ID ở trên, tạo ra mảng Employee tương ứng
    for (i = 0; i < searchResultsId.length; i++) {
      this.orderService.getOrder(this.orders[searchResultsId[i]].id).subscribe(data => {
        searchResults.push(data);
      })
    }

    console.log(searchResults);
    this.orders = searchResults;
  }

  getIdForDelete(id) {
    this.idForDelete = id;
  }
}
