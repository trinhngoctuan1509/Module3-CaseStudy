import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public subscription: Subscription;
  public customers;
  public searchKeyword;
  public idForDelete;

  constructor(
    public customerService: CustomerService
  ) { }

  ngOnInit() {
    this.subscription = this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    })
  }

  deleteCustomer() {
    this.subscription = this.customerService.deleteCustomer(this.idForDelete).subscribe(data => {
      this.customerService.getAllCustomer().subscribe(data => {
        this.customers = data;
      })
    })
  }

  searchCustomer() {
    var searchResultsId = [];
    var searchResults = [];

    // Tìm kiếm tất cả ID trong mảng Employees thỏa mãn điều kiện
    for (var i = 0; i < this.customers.length; i++) {
      if (this.customers[i].fullName.match(this.searchKeyword)) {
        searchResultsId.push(i);
      }
    }

    // Từ các ID ở trên, tạo ra mảng Employee tương ứng
    for (i = 0; i < searchResultsId.length; i++) {
      this.customerService.getCustomer(this.customers[searchResultsId[i]].id).subscribe(data => {
        searchResults.push(data);
      })
    }

    console.log(searchResults);
    this.customers = searchResults;
  }

  getIdForDelete(id) {
    this.idForDelete = id;
  }

}
