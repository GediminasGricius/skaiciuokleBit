import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../services/categories.service";
import {Category} from "../../../models/Category";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public categories:Category[]=[];

  constructor(private categoriesService:CategoriesService) {
   this.loadData();
  }

  private loadData(){
    this.categoriesService.getCategories().subscribe((categories)=>{
      this.categories=categories;
    })
  }

  ngOnInit(): void {
  }

  public onClickDelete(id:number|null){
    if (id){
      this.categoriesService.deleteCategory(id).subscribe(()=>{
        this.loadData();
      });
    }
  }

}
