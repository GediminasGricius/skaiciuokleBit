import { Component, OnInit } from '@angular/core';
import {CurrenciesService} from "../../services/currencies.service";

@Component({
  selector: 'app-excahange',
  templateUrl: './excahange.component.html',
  styleUrls: ['./excahange.component.css']
})
export class ExcahangeComponent implements OnInit {

  public currenciesCodes:string[]=[];
  public currenciesNames:string[]=[];
  public from:string|null=null;
  public to:string|null=null;
  public outText:string|null=null;


  constructor(private currenciesService:CurrenciesService) { }

  ngOnInit(): void {
    if (this.currenciesService.currencies!=null){
      this.currenciesNames=Object.values(this.currenciesService.currencies) ;
      this.currenciesCodes=Object.keys(this.currenciesService.currencies) ;
    }else{
      this.currenciesService.getCurrencies().subscribe((currencies)=>{
        this.currenciesNames=Object.values(currencies) ;
        this.currenciesCodes=Object.keys(currencies) ;
      })
    }
  }

  public exchnge(){
    if (this.from && this.to){
      this.currenciesService.getRate(this.from,this.to).subscribe((rate)=>{
        this.outText=this.from + " keičiamas į "+this.to+" kursu: "+rate;

      });
    }
  }

}
