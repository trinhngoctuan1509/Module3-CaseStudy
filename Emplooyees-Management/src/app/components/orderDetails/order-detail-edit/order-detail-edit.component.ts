import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetailService } from '../../../services/order-detail.service';

@Component({
  selector: 'app-order-detail-edit',
  templateUrl: './order-detail-edit.component.html',
  styleUrls: ['./order-detail-edit.component.css']
})
export class OrderDetailEditComponent implements OnInit {
  public formEditOrderDetail: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public activateRouter: ActivatedRoute,
    public orderDetailService: OrderDetailService,
    public router: Router
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.orderDetailService.getOrderDetail(data.id).subscribe(data => {
        this.formEditOrderDetail.patchValue(data);
      })
    })

    this.formEditOrderDetail = this.formBuilder.group({
      id: [''],
      orderCode: [''],
      extraServiceCode: [''],
      amount: [''],
    })
  }

  editOrderDetail() {
    this.orderDetailService.editOrderDetail(this.formEditOrderDetail.value).subscribe(data => {
      this.router.navigateByUrl('orderDetails');
    })
  }

}
