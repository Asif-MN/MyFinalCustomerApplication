import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListViewComponent } from './customerlistview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerListViewComponent],
  exports: [CustomerListViewComponent]
})

export class CustomerListViewModule { }