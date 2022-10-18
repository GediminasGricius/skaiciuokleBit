import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.css']
})
export class KmiComponent implements OnInit {
  public ugis:number|null=null;
  public svoris:number|null=null;
  public kmi:number|null=null;

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if (this.svoris!=null && this.ugis!=null){
       this.kmi=Number( (this.svoris/((this.ugis/100)**2)).toFixed(2));
    }
  }

}
