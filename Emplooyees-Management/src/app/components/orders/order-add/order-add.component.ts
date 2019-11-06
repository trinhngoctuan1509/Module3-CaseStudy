import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order.model';
import { OrderService } from '../../../services/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})

export class OrderAddComponent implements OnInit {
  public subscription: Subscription;
  public formAddNewOrder: FormGroup;
  public minStartDate = new Date();
  public minEndDate;

  constructor(
    public orderService: OrderService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddNewOrder = this.formBuilder.group({
      employeeCode: ['', [
        Validators.required,
        Validators.pattern('^(NV-)[0-9]{4}$')
      ]],
      customerCode: ['', [
        Validators.required,
        Validators.pattern('^(KH-)[0-9]{4}$')
      ]],
      serviceCode: ['', [
        Validators.required,
        Validators.pattern('^(DV-)[0-9]{4}$')
      ]],
      startDate: ['',Validators.required],
      endDate: ['',[Validators.required]],
      downPayment: ['', [
        Validators.pattern('^[0-9]*$')
      ]],
      totalMoney: ['', [
        Validators.pattern('^[0-9]*$')
      ]]
    });


    this.formAddNewOrder.valueChanges.subscribe(data => {
      this.minEndDate = data.startDate;
    })
  }
  // ********* Finish ngOnInit **************

  addNewOrder() {
    this.subscription = this.orderService.addNewOrder(this.formAddNewOrder.value).subscribe(data => {
      this.router.navigateByUrl('orders');
    })
  }

  printFormValue() {
    console.log(this.formAddNewOrder.value);
  }
}




