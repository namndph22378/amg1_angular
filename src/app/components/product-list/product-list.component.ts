import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products!: IProduct[];
    constructor (
      private productService : ProductService,
      private router : Router){
        this.productService.getProducts().subscribe(data =>{
          this.products = data
        })
      }
      remoteItem(id: number){
        this.productService.deleteProducts(id).subscribe(()=>{
          this.products = this.products.filter(product =>product.id !== id)
        })
      }

      goToProductAdd(){
        this.router.navigate(["admin/product/add"])
      }

}
