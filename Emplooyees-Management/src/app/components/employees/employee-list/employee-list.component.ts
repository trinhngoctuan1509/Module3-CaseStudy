import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public subscription: Subscription;
  public employees;
  public searchKeyword;
  public idForDelete;
  public employeeNameForDelete;

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.subscription = this.employeeService.getAllEmployees().subscribe((data: any) => {
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteEmployee() {
    this.subscription = this.employeeService.deleteEmployee(this.idForDelete).subscribe(data => {
      this.employeeService.getAllEmployees().subscribe(data => {
        this.employees = data;
      })
    })
  }

  searchEmployee() {
    var searchResultsId = [];
    var searchResults = [];

    // Tìm kiếm tất cả ID trong mảng Employees thỏa mãn điều kiện
    for (var i = 0; i < this.employees.length; i++) {
      if (this.employees[i].fullName.match(this.searchKeyword)) {
        searchResultsId.push(i);
      }
    }

    // Từ các ID ở trên, tạo ra mảng Employee tương ứng
    for (i = 0; i < searchResultsId.length; i++) {
      this.employeeService.getEmployee(this.employees[searchResultsId[i]].id).subscribe(data => {
        searchResults.push(data);
      })
    }

    console.log(searchResults);
    this.employees = searchResults;
  }

  getIdForDelete(id) {
    this.idForDelete = id;
    this.employeeService.getEmployee(this.idForDelete).subscribe(data=>{
      this.employeeNameForDelete = data.fullName;
    })
  }

}
