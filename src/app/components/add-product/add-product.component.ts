import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public name:string|null=null;
  public quantity:number|null=null;

  public category:string|null="";
  public categories:string[]=["Baldai", "Buitinė technika"];

  constructor(private productsService:ProductsService, private router:Router) {

  }

  ngOnInit(): void {
  }

  public addProduct(){
    if (this.name!=null && this.quantity!=null && this.category!=null){
      this.productsService.addProduct(this.name,this.quantity);
      this.name=null;
      this.quantity=null;
      this.router.navigate(['/']);
    }
  }

}
