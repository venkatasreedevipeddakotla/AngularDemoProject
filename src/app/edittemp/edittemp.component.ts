import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-edittemp',
  templateUrl: './edittemp.component.html',
  styleUrls: ['./edittemp.component.css']
})
export class EdittempComponent implements OnInit {
  e:Employee;
  id:string;
  constructor(private empservice:EmpService, private Activatedroute:ActivatedRoute,
    private route:Router )
    {
      const id=this.Activatedroute.snapshot.paramMap.get('id');
      console.log(this.id);
      this.e=this.empservice.findemp(id);
    }

ngOnInit(): void {
  
}


}
