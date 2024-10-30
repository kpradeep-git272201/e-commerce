import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';

const routes: Routes = [
  { path: 'view-product', component: ViewProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'inventory', component: InventoryManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
