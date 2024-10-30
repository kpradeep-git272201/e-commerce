import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ReturnsAndRefundsComponent } from './returns-and-refunds/returns-and-refunds.component';

const routes: Routes = [
  { path: 'view-order', component: ViewOrdersComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'order-tracking', component: OrderTrackingComponent },
  { path: 'retrun-and-refund', component: ReturnsAndRefundsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
