import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit{
  e:Employee={eid:101,ename:"Janani",salary:10000,doj:new Date(4/5/2020)};
  constructor(private empservice:EmpService) {
    
   }

  ngOnInit(): void {
    
  }

  save(): void{
    this.empservice.addemp(this.e);
    console.log(this.e);
  }

}
