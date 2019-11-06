import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  public subscription: Subscription;
  public formAddNewCustomer: FormGroup;

  constructor(
    public customerService: CustomerService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddNewCustomer = this.formBuilder.group({
      customerType: ['',[
        Validators.required
      ]],
      fullName: ['',[
        Validators.required
      ]],
      dateOfBirth: ['',[
        Validators.required
      ]],
      identityNumber: ['',[
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      phone: ['',[
        Validators.required,
        Validators.pattern('^(090|091|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))[0-9]{7}$')
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      address: ['',[
        Validators.required
      ]]
    })
  }

  addNewCustomer() {
    this.subscription = this.customerService.addNewCustomer(this.formAddNewCustomer.value).subscribe(data => {
      this.router.navigateByUrl('customers');
    })
  }

}
