import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="Good Day!!!";
  age:number;
  username:string;
  password:string;
  constructor()
  {
    

  }
  ngOnInit() :void{

  }

}
