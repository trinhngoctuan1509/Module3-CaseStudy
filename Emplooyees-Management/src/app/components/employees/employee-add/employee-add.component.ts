import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  public subscription: Subscription;
  public formAddNewEmployee: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddNewEmployee = this.formBuilder.group({
      fullName: ['',Validators.required],
      position: ['',Validators.required],
      level: ['',Validators.required],
      part: ['',Validators.required],
      dateOfBirth: ['',Validators.required],
      identityNumber: ['', [
        Validators.pattern('^[0-9]{9}$')
      ]],
      salary: ['', [
        Validators.pattern('^[0-9]*$')
      ]],
      phone: ['', [
        Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))[0-9]{7}$')
      ]],
      email: ['', [
        Validators.email
      ]],
      address: ['',Validators.required]
    });

    console.log(this.formAddNewEmployee);
  }


  addNewEmployee() {
    this.subscription = this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(data => {
      this.router.navigateByUrl('employees');
    })
  }
}
