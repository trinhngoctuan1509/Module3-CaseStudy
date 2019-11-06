import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API: string = 'http://localhost:3000/employees';

  constructor(
    public http: HttpClient
  ) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.API);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  addNewEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.API, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  editEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.API + '/' + employee.id, employee)
  }
}
