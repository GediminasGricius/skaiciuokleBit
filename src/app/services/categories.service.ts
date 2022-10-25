import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Joke} from "../models/Joke";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  public getCategories(){
    return this.http.get<Category[]>('http://localhost/pirmasLa/public/api/categories');
  }
  public getCategory(id:number){
    return this.http.get<Category>('http://localhost/pirmasLa/public/api/categories/'+id);
  }

  public insertCategory(category:Category){
    return this.http.post<Category>('http://localhost/pirmasLa/public/api/categories',category);
  }

  public updateCategory(category:Category){
    return this.http.patch<Category>('http://localhost/pirmasLa/public/api/categories/'+category.id,category);
  }

  public deleteCategory(id:number){
    return this.http.delete<any>('http://localhost/pirmasLa/public/api/categories/'+id);
  }
}
