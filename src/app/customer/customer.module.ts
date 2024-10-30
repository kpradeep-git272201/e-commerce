import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerFeedbackComponent,
    ManageReviewsComponent,
    CustomerDetailComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
