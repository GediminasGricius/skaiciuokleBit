import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:Product[]=[];

  constructor(private productsService:ProductsService) {
    this.products=productsService.products;
  }

  ngOnInit(): void {
  }



  public onReceiveDelete(i:number){
     this.productsService.delete(i);

  }

}
