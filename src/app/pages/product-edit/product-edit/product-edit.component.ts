import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import {Validators, FormBuilder} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
    product!: IProduct;
    constructor (
      private formBuilder : FormBuilder,
      private productService: ProductService,
      private routerNavigate : Router,
      private router : ActivatedRoute
    ){
        this.router.paramMap.subscribe((params =>{
          const id = Number(params.get('id'));
          this
        }))
    }
    productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: [0]
    })
}
