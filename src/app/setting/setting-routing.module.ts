import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
  { path: 'profile-setting', component: ProfileSettingComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'payment-method', component: PaymentMethodComponent },
  { path: 'shipping-delivery', component: ShippingDeliveryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
