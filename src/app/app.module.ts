import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TotalComponent } from './total/total.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { TempformComponent } from './tempform/tempform.component';
import { EdittempComponent } from './edittemp/edittemp.component';

import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SuppListComponent } from './supp-list/supp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TotalComponent,
    EmplistComponent,
    EmpAddComponent,
    TempformComponent,
    EdittempComponent,
   
    AddSupplierComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
    SuppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
