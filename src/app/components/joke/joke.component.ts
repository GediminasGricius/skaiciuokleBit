import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Joke} from "../../models/Joke";
import {JokeService} from "../../services/joke.service";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public joke:string|null=null;
  public loading=true;
  public error=false;
  public category="Programming";
  public categories:string[];



  constructor(private jokeService:JokeService) {
    this.categories=jokeService.categories;
    this.loadJoke();
  }

  private loadJoke(){
    this.loading=true;
    this.error=false;
    this.jokeService.getJoke(this.category).subscribe(
      {
        next:(response)=>{
          this.joke=response.joke;
          this.loading=false;
        },
        error:(err)=>{
          this.error=true;
          this.loading=false;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  public clickLoadJoke(){
    this.loadJoke();
  }

}
