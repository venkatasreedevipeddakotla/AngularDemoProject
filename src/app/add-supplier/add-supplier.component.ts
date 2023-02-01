import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/Models/Supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit{
  s:Supplier={sid:null,sname:"",location:""}
  message:string;
  constructor(private supplierservice:SupplierService){ }
  ngOnInit(): void {
   
  }

  savesupplier(data:any):void
  {
   this.supplierservice.addsupplier(data).subscribe(
     data=>{
       this.message="Supplier Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.s);
  }
  

}
