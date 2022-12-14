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
import { JokeComponent } from './components/joke/joke.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ExcahangeComponent } from './components/excahange/excahange.component';
import { ListComponent } from './components/categories/list/list.component';
import { EditComponent } from './components/categories/edit/edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import {AuthInterceptor} from "./services/auth.interceptor";

const appRoutes:Routes=[
  {path:"", component:CartComponent},
  {path:"new", component:AddProductComponent},
  {path:"edit/:id", component:EditProductComponent},
  {path:"joke", component:JokeComponent},
  {path:"exchange", component:ExcahangeComponent},
  {path:"categories", component:ListComponent},
  {path:"categories/:id",component:EditComponent},
  {path:"userProfile", component:UserProfileComponent},
  {path:"login",component:LoginComponent}
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
    JokeComponent,
    ExcahangeComponent,
    ListComponent,
    EditComponent,
    UserProfileComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
