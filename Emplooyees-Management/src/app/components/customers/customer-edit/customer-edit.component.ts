import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  public subscription: Subscription;
  public formEditCustomer: FormGroup;

  constructor(
    public customerService: CustomerService,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEditCustomer = this.formBuilder.group({
      id: [''],
      customerType: [''],
      fullName: [''],
      dateOfBirth: [''],
      identityNumber: [''],
      phone: [''],
      email: [''],
      address: [''],
    });

    this.activateRoute.params.subscribe(data => {
      this.subscription = this.customerService.getCustomer(data.id).subscribe(data => {
        this.formEditCustomer.patchValue(data);
      })
    });

  }

  editCustomer() {
    this.subscription = this.customerService.editCustomer(this.formEditCustomer.value).subscribe(data => {
      this.router.navigateByUrl('customers');
    })
  }

}
