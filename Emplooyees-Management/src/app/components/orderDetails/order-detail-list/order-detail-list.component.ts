import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../../services/order-detail.service';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styleUrls: ['./order-detail-list.component.css']
})
export class OrderDetailListComponent implements OnInit {
  public orderDetails;
  public searchKeyword;
  public idForDelete;

  constructor(
    public orderDetailService: OrderDetailService
  ) { }

  ngOnInit() {
    this.orderDetailService.getAllOrderDetails().subscribe(data => {
      this.orderDetails = data;
      console.log(this.orderDetails);
    })
  }

  deleteOrderDetail() {
    this.orderDetailService.deleteOrderDetail(this.idForDelete).subscribe(data => {
      this.orderDetailService.getAllOrderDetails().subscribe(data => {
        this.orderDetails = data;
      });
    })
  }

  searchOrderDetail() {
    var searchResultsId = [];
    var searchResults = [];

    // Tìm kiếm tất cả ID trong mảng Employees thỏa mãn điều kiện
    for (var i = 0; i < this.orderDetails.length; i++) {
      if (this.orderDetails[i].orderCode.match(this.searchKeyword)) {
        searchResultsId.push(i);
      }
    }
    console.log(searchResultsId);

    // Từ các ID ở trên, tạo ra mảng Employee tương ứng
    for (i = 0; i < searchResultsId.length; i++) {
      this.orderDetailService.getOrderDetail(this.orderDetails[searchResultsId[i]].id).subscribe(data => {
        searchResults.push(data);
      })
    }

    console.log(searchResults);
    this.orderDetails = searchResults;
  }

  getIdForDelete(id) {
    this.idForDelete = id;
  }

}
