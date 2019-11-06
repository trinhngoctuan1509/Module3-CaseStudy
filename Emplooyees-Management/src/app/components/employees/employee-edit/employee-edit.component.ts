import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  public subscription: Subscription;
  public employee = new Employee;
  public formEditEmployee: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    public activateRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEditEmployee = this.formBuilder.group({
      id: [''],
      fullName: [''],
      position: [''],
      level: [''],
      part: [''],
      dateOfBirth: [''],
      identityNumber: [''],
      salary: [''],
      phone: [''],
      email: [''],
      address: ['']
    })

    this.activateRoute.params.subscribe(data => {
      this.subscription = this.employeeService.getEmployee(data.id).subscribe(data => {
        this.formEditEmployee.patchValue(data);
      })
    })
  }

  editEmployee() {
    this.subscription = this.employeeService.editEmployee(this.formEditEmployee.value).subscribe(data => {
      this.router.navigateByUrl('employees');
    })

  }

}
