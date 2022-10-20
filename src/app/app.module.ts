import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { KmiComponent } from './components/kmi/kmi.component';
import { CartComponent } from './components/cart/cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { EditProductComponent } from './components/edit-product/edit-product.component';

const appRoutes:Routes=[
  {path:"", component:CartComponent},
  {path:"new", component:AddProductComponent},
  {path:"edit/:id", component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    KmiComponent,
    CartComponent,
    AddProductComponent,
    CartItemComponent,
    CartDetailsComponent,
    NavigationComponent,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
