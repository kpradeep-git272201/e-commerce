import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class LayoutModule { }
