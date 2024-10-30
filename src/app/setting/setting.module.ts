import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    ProfileSettingComponent,
    PaymentMethodComponent,
    ShippingDeliveryComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
