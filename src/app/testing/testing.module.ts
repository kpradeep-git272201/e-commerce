import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestComponent } from './test/test.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    MaterialModule
  ]
})
export class TestingModule { }
