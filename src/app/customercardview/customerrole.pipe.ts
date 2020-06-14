import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '@/_models';

@Pipe({ name: 'iseditable' })
export class CustomerRolePipe implements PipeTransform {
  transform(value: string ):any {
    return (value == 'User')? true : false;
  }
}