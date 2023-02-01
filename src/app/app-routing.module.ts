import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { EdittempComponent } from './edittemp/edittemp.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginComponent } from './login/login.component';
import { SuppListComponent } from './supp-list/supp-list.component';

import { TempformComponent } from './tempform/tempform.component';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'total',component:TotalComponent},
  {path:'emplist',component:EmplistComponent},
  {path:'empadd',component:EmpAddComponent},
  {path:'tempform',component:TempformComponent},
  {path:'edit/:id',component:EdittempComponent},
  {path:'supplist',component:SuppListComponent},
  {path:'addsupplier',component:AddSupplierComponent},
  {path:'editsupplier/:id',component:EditSupplierComponent},
  {path:'deletesupp/:id',component:DeleteSupplierComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
