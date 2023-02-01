import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit{
  p:Product={pid:null,pname:"",price:5000,dom:new Date('4/3/2020')};
  constructor()
  {

  }

  ngOnInit(): void{
    
  }
saveproduct(data:any):void{
  console.log(data);
  console.log(this.p);
}

}
