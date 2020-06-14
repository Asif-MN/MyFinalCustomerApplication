import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders.routing';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],

  declarations: [OrdersComponent]
})
export class OrdersModule { }