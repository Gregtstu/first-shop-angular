import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public products$!:any
  constructor(public productServ: ProductService) { }

  ngOnInit(): void {
   this.productServ.getAll().subscribe( res =>{
    this.products$ = res;
   })
  }



}
