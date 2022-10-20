import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products:Product[]=[];
  private _productUpdate=new EventEmitter();

  constructor() {
    this.load();
  }

  public addProduct(name:string, quantity:number){
    this._products.push(new Product(name, quantity));
    this.save();
    this._productUpdate.emit();
  }

  public delete(i:number){
    this._products.splice(i,1);
    this.save();
    this._productUpdate.emit();
  }

  public update(i:number, name:string, quantity:number){
    this._products[i].name=name;
    this._products[i].quantity=quantity;
    this._productUpdate.emit();
  }

  public get products(){
    return this._products;
  }

  public get productUpdate(){
    return this._productUpdate;
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
