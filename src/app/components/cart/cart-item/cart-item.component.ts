import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product:Product|null=null;
  @Input() index:number|null=null;

  @Output() productDelete=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public buttonDeletePressed(){
    if (this.index!=null) {
      this.productDelete.emit(this.index);
    }
  }

}
