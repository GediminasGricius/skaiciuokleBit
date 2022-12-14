import { Component } from '@angular/core';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skaiciuokle';

  constructor(private productsService:ProductsService) {
    productsService.load();
  }

}
