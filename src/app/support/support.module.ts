import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    CustomerSupportComponent,
    FAQsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
