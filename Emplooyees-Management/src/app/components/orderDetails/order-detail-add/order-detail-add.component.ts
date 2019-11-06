import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderDetailService } from '../../../services/order-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail-add',
  templateUrl: './order-detail-add.component.html',
  styleUrls: ['./order-detail-add.component.css']
})
export class OrderDetailAddComponent implements OnInit {
  public formAddNewOrderDetail: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public orderDetailService: OrderDetailService,
    public router: Router
  ) { }

  ngOnInit() {
    this.formAddNewOrderDetail = this.formBuilder.group({
      orderCode: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{3}$')
      ]],
      extraServiceCode: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{3}$')
      ]],
      amount: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]]
    })
  }

  addNewOrderDetail() {
    this.orderDetailService.addNewOrderDetail(this.formAddNewOrderDetail.value).subscribe(data => {
      this.router.navigateByUrl('orderDetails')
    })

  }

}
