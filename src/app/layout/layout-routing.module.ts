import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
      { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard] },
      { path: 'product', loadChildren: () => import('../product/product.module').then(m => m.ProductModule), canActivate:[AuthGuard] },
      { path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderModule), canActivate:[AuthGuard] },
      { path: 'customer', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule), canActivate:[AuthGuard] },
      { path: 'setting', loadChildren: () => import('../setting/setting.module').then(m => m.SettingModule), canActivate:[AuthGuard] },
      { path: 'support', loadChildren: () => import('../support/support.module').then(m => m.SupportModule), canActivate:[AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
