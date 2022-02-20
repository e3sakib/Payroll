import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee.model';

@Component({ 
  selector: 'app-empshow',
  templateUrl: './empshow.component.html',
  styleUrls: ['./empshow.component.css']
})
export class EmpshowComponent implements OnInit {
  employee:Employee= new Employee();
  
  Employees:any;
  constructor(private http:HttpClient, private router: Router) {
    this.loadEmployees();
  }

  ngOnInit(): void {
    this.loadEmployees();
  }
loadEmployees(){console.log("dddddd");

  const headers ={"content-Type":"application/json"};
  this.http.post<any>("http://localhost:8081/employee/getAll",{headers:headers}).subscribe(map =>{console.log(map.Data);
this.Employees = map.Data;
})
}

editEmployee(emp:Employee){

this.router.navigate(['/employee'], { state: { emp: emp } })

}
deleteEmployee (){

}



}
