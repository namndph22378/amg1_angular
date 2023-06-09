import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import {Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
    constructor (
      private formBuilder : FormBuilder,
      private productService: ProductService,
      private router : Router
    ){}
    productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: [0]
    })
    onHandleSubmit(){
      const product: IProduct = {
        name:  this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.addProducts(product).subscribe(()=>{
        this.router.navigate(["admin/product"])
      })
    }
}
