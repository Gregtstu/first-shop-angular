import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './service/product.service';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: any[], type: ''): any {
    return products.filter(product => {     
      return  product.product == type;
    })
  }

}
