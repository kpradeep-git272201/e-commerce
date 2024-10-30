import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ReturnsAndRefundsComponent } from './returns-and-refunds/returns-and-refunds.component';
import { AddOrderComponent } from './add-order/add-order.component';


@NgModule({
  declarations: [
    ViewOrdersComponent,
    OrderTrackingComponent,
    ReturnsAndRefundsComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
