import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/Models/Supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supp-list',
  templateUrl: './supp-list.component.html',
  styleUrls: ['./supp-list.component.css']
})
export class SuppListComponent implements OnInit
{
supplierlst:Supplier[];
message:string;
constructor(private supplierservice:SupplierService){ }

  ngOnInit(): void {
   this.supplierservice.getsuppliers().subscribe(
    data=>{
      this.supplierlst=data;
      console.log(this.supplierlst);
    }
   )
  }

  

  clickMethod(supplier:Supplier){
    if(confirm("Are you sure to delete "+supplier.sname)){
      this.supplierservice.Deletesupplier(supplier.sid).subscribe()
      {
        this.message="Supplier deleted successfully";
        this.supplierlst=this.supplierlst.filter(item=>item.sid !=supplier.sid);
        console.log(this.supplierlst.length);
      }

    }
  }
  
  
  

}
