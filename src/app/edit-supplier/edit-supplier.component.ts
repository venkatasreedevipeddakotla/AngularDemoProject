import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/Models/Supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit{
  message:string;
  s:Supplier;
  id:string;
  constructor(private supplierservice:SupplierService,
    private route:Router,
    private router:ActivatedRoute){ 
      this.id=this.router.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.supplierservice.getsupplier(this.id).subscribe(
      data=>{
        this.s=data;
      }
    )
  }

  Update(supplier:Supplier)
  {
    let id=supplier.sid;
    this.supplierservice.Editsupplier(id,supplier).subscribe(
      data=>{
        this.message="Supplier updated successfully";
      }
    )
  }

}
