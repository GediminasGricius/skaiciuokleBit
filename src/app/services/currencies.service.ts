import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Currencies} from "../models/Currencies";
import {Rate} from "../models/Rate";
import {map,tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  public currencies:Currencies|null=null;

  constructor(private http:HttpClient) { }

  public getCurrencies(){
    return this.http.get<Currencies>('https://api.frankfurter.app/currencies').pipe(
      tap((currency)=>{
        this.currencies=currency;
      })
    );
  }

  public getRate(from:string, to:string){
    return this.http.get<Rate>('https://api.frankfurter.app/latest?from='+from+'&to='+to)

      .pipe(
        map(
          (rate)=>{
                return Object.values(rate.rates)[0];
            }
      ));

  }
}
