import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  public subscription: Subscription;
  public services;
  public searchKeyword;
  public idForDelete;

  constructor(
    public serviceService: ServiceService
  ) { }

  ngOnInit() {
    this.subscription = this.serviceService.getAllServices().subscribe(data => {
      this.services = data
    })
  }

  deleteService() {
    this.serviceService.deleteService(this.idForDelete).subscribe(data => {
      this.serviceService.getAllServices().subscribe(data => {
        this.services = data;
      })
    })
  }

  searchService() {
    var searchResultsId = [];
    var searchResults = [];

    // Tìm kiếm tất cả ID trong mảng Employees thỏa mãn điều kiện
    for (var i = 0; i < this.services.length; i++) {
      if (this.services[i].serviceName.match(this.searchKeyword)) {
        searchResultsId.push(i);
      }
    }

    // Từ các ID ở trên, tạo ra mảng Employee tương ứng
    for (i = 0; i < searchResultsId.length; i++) {
      this.serviceService.getService(this.services[searchResultsId[i]].id).subscribe(data => {
        searchResults.push(data);
      })
    }

    console.log(searchResults);
    this.services = searchResults;
  }

  getIdForDelete(id) {
    this.idForDelete = id;
  }


}
