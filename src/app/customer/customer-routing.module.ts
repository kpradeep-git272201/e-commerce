import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';

const routes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'customer-detail', component: CustomerDetailComponent },
  { path: 'customer-feedback', component: CustomerFeedbackComponent },
  { path: 'manage-review', component: ManageReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
