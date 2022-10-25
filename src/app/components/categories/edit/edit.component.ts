import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";
import {Category} from "../../../models/Category";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id:number;
  public name:string|null=null;
  public user_id:number|null=null;
  constructor(
    private route:ActivatedRoute,
    private categoryService:CategoriesService,
    private router:Router,
  ) {
    this.id=this.route.snapshot.params['id'];
    categoryService.getCategory(this.id).subscribe((category)=>{
      this.name=category.name;
      this.user_id=category.user_id;
    });
  }

  ngOnInit(): void {
  }

  public onClickSave(){
    if (this.name && this.user_id){
      const category:Category={
        id:this.id,
        name:this.name,
        user_id:this.user_id,
      };
      this.categoryService.updateCategory(category).subscribe(()=>{
        this.router.navigate(["/categories"]);
      });
    };
  }

}
