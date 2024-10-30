import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';


@NgModule({
  declarations: [
    ViewProductsComponent,
    AddProductComponent,
    CategoriesComponent,
    InventoryManagementComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
