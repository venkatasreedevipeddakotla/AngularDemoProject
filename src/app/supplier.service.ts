import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Supplier } from 'src/Models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  s:Supplier;
  slist:any;
  url:string="https://localhost:7294/api/Supplier"

  constructor(private httpclient:HttpClient ) 
  {

  }

  getsuppliers():Observable<Supplier[]>{
    this.slist=this.httpclient.get(this.url);
    return this.slist;

  }

  getsupplier(id:string):Observable<Supplier>
  {
    return this.httpclient.get<Supplier>(this.url + "/SupplierByID?id=" + id);
  }

  addsupplier(s:Supplier):Observable<Supplier>
  {
    return this.httpclient.post<Supplier>(this.url,s,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  Deletesupplier(id:number):Observable<Supplier>
  {
    return this.httpclient.delete<Supplier>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getsuppliers();
  }

  Editsupplier(id:number,s:Supplier):Observable<Supplier>
  {
    return this.httpclient.put<Supplier>(this.url+"?id="+id,s,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })

    });
  }

  /*private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }*/
}
