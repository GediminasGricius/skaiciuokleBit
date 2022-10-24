import { Injectable } from '@angular/core';
import {Joke} from "../models/Joke";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private _categories=['Programming', 'Dark', 'Misc'];

  constructor(private http:HttpClient) { }


  public getJoke(category:string){
    return this.http.get<Joke>('https://v2.jokeapi.dev/joke/'+category+'?type=single');
  }

  public get categories(){
    return this._categories;
  }
}
