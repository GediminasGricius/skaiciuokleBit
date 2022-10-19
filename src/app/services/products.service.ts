import { Injectable } from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products:Product[]=[];

  constructor() {
    this.load();
  }

  public addProduct(name:string, quantity:number){
    this._products.push(new Product(name, quantity));
    this.save();
  }

  public delete(i:number){
    this._products.splice(i,1);
    this.save();
  }

  public get products(){
    return this._products;
  }

  public save(){
    localStorage.setItem('products',JSON.stringify(this._products));
  }

  public load(){
    const data=localStorage.getItem('products');
    if (data!=null){
      this._products=JSON.parse(data);
    }
  }

}
