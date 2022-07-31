import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public type:string;
  constructor(private rout: Router, private servProduct: ProductService) { 
    this.type = 'Phone';
  }

  ngOnInit(): void {
    
     
  }


  setType(type: string){
    this.type = type;
    this.servProduct.setType(this.type)
    if (this.type != 'Cart'){
      this.rout.navigate(['/'],{
        queryParams:{
          type: this.type,
        }
      })
    }
   
  }
}
