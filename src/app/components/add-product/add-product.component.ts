import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null;

  constructor(private productsService:ProductsService) {

  }

  ngOnInit(): void {
  }

  public addProduct(){
    if (this.name!=null && this.quantity!=null){
      this.productsService.addProduct(this.name,this.quantity);
      this.name=null;
      this.quantity=null;
    }
  }

}
