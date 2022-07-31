import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  foods: Food[] = [
    { value: 'Phone', viewValue: 'Phone' },
    { value: 'Tablet', viewValue: 'Tablet' },
    { value: 'Laptop', viewValue: 'Laptop' },
  ];

  public form!: FormGroup;
  constructor( private productServ: ProductService, private rout: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      product: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      information: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const product = {
      product: this.form.value.product,
      name: this.form.value.name,
      foto: this.form.value.foto,
      information: this.form.value.information,
      price: this.form.value.price,
      data: new Date(),

    }
    this.productServ.create(product).subscribe(res => {
      this.form.reset();
      this.rout.navigate(['/']);
    });

  }
}
