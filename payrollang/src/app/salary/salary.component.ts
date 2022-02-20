import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salaryform } from '../salaryform/salaryform.model';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaryform:Salaryform= new Salaryform();

  constructor(private http:HttpClient, private router: Router) { this.loadSalaryforms()}

  Salaryforms:any;

  ngOnInit(): void {
    this.loadSalaryforms()
  }

  loadSalaryforms(){console.log("dddddd");

  const headers ={"content-Type":"application/json"};
  this.http.post<any>("http://localhost:8081/salaryform/getAll",{headers:headers}).subscribe(map =>{console.log(map.Data);
this.Salaryforms = map.Data;
})
}

}
