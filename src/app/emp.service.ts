import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empid:number;
  e:Employee={eid:101,ename:"Ram",salary:10000,doj:new Date('4/5/2020')};

  elist:Employee[]=[
    
    {eid:101,ename:"Ram",salary:10000,doj:new Date('4/5/2020')},
    {eid:102,ename:"Shyam",salary:12000,doj:new Date('8/5/2021')},
    {eid:103,ename:"Krithi",salary:14000,doj:new Date('2/5/2022')},
    {eid:104,ename:"Shanti",salary:16000,doj:new Date('5/8/2022')}
  ]
  refreshList(): Employee[]
  {
    return this.elist;
  }

  addemp(e:Employee):void
  {
    this.elist.push(e);
  }
  findemp(id:string):any{
    this.empid=Number(id);
    this.e=this.elist.find(x=>x.eid==this.empid);
    return this.e;
  }

  constructor() { }
}
