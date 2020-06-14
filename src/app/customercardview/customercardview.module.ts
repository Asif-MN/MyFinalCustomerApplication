import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardViewComponent } from './customercardview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerCardViewComponent],
  exports: [CustomerCardViewComponent]
})

export class CustomerCardViewModule { }