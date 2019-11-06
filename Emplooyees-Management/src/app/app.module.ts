import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { MaterialModule } from '../app/modules/material.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeService } from './services/employee.service';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderAddComponent } from './components/orders/order-add/order-add.component';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';
import { ServiceComponent } from './components/services/service/service.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { ServiceAddComponent } from './components/services/service-add/service-add.component';
import { ServiceEditComponent } from './components/services/service-edit/service-edit.component';
import { OrderDetailComponent } from './components/orderDetails/order-detail/order-detail.component';
import { OrderDetailListComponent } from './components/orderDetails/order-detail-list/order-detail-list.component';
import { OrderDetailAddComponent } from './components/orderDetails/order-detail-add/order-detail-add.component';
import { OrderDetailEditComponent } from './components/orderDetails/order-detail-edit/order-detail-edit.component';

const appRouters: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent
      },
      {
        path: ':id/edit',
        component: EmployeeEditComponent
      },
      {
        path: 'add',
        component: EmployeeAddComponent
      }
    ]
  },
  {
    path: 'customers',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: ':id/edit',
        component: CustomerEditComponent
      },
      {
        path: 'add',
        component: CustomerAddComponent
      },
    ]
  },
  {
    path: 'orders',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderListComponent
      },
      {
        path: ':id/edit',
        component: OrderEditComponent
      },
      {
        path: 'add',
        component: OrderAddComponent
      }]
  },
  {
    path: 'services',
    component: ServiceComponent,
    children: [
      {
        path: '',
        component: ServiceListComponent
      },
      {
        path: ':id/edit',
        component: ServiceEditComponent
      },
      {
        path: 'add',
        component: ServiceAddComponent
      }
    ]
  },
  {
    path: 'orderDetails',
    component: OrderDetailComponent,
    children: [
      {
        path: '',
        component: OrderDetailListComponent
      },
      {
        path: ':id/edit',
        component: OrderDetailEditComponent
      },
      {
        path: 'add',
        component: OrderDetailAddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    HomeComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    OrderComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceAddComponent,
    ServiceEditComponent,
    OrderDetailComponent,
    OrderDetailListComponent,
    OrderDetailAddComponent,
    OrderDetailEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,

    MaterialModule,

    RouterModule.forRoot(appRouters)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
