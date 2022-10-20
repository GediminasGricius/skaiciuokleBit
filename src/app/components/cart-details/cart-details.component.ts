import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  public count:number|null=null;
  public quantity:number=0;

  private calculate(){
    const products=this.productsService.products;
    this.count=products.length;
    this.quantity=0;
    products.forEach((product)=>{
      this.quantity+=product.quantity;
    });
  }

  constructor(private productsService:ProductsService ) {
    this.calculate();

    this.productsService.productUpdate.subscribe(()=>{
      this.calculate();
    });

  }

  ngOnInit(): void {
  }

}
