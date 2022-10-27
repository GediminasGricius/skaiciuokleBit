import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor(private productsService:ProductsService, private authService:AuthService) {

  }

  ngOnInit(): void {
  }

  public onClickLogout(){
    this.authService.logout();
  }

}
