import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  public subscription: Subscription;
  public formEditOrder: FormGroup;

  constructor(
    public orderService: OrderService,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEditOrder = this.formBuilder.group({
      id: [''],
      employeeCode: [''],
      customerCode: [''],
      serviceCode: [''],
      startDate: [''],
      endDate: [''],
      downPayment: [''],
      totalMoney: ['']
    })

    this.activateRoute.params.subscribe(data => {
      this.subscription = this.orderService.getOrder(data.id).subscribe(data => {
        this.formEditOrder.patchValue(data);
      })
    })
  }

  editOrder() {
    this.subscription = this.orderService.editOrder(this.formEditOrder.value).subscribe(data => {
      this.router.navigateByUrl('orders');
    })
  }

}
