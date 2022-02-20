import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Salaryform } from './salaryform.model';

@Component({
  selector: 'app-salaryform',
  templateUrl: './salaryform.component.html',
  styleUrls: ['./salaryform.component.css']
})
export class SalaryformComponent implements OnInit {
salaryform:Salaryform= new Salaryform();
salaryforms:Salaryform[] = [];
  isSave:boolean= true
  salfmIndex:number= -1
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.load();
  }
  load() {
    this.http.get<any>('http://localhost:8081/salaryform/getAll').subscribe(salaryforms=>{
      console.log(salaryforms+"M");
      
      this.salaryforms=salaryforms;
    }
    )
  }
  addSalaryform(){
    console.log(this.salaryform);
    this.salaryforms.push(this.salaryform)
    console.log(this.salaryform);

    const headers = {"content-Type":"application/json"}

    this.http.post<any>("http://localhost:8081/salaryform/save", JSON.stringify(this.salaryform), { 'headers': headers }).subscribe(data=> {
     
     console.log(data);
 
     }
 
     )
     alert("Form Submitted")
    
  }
  editSalaryform(i: number) {
    this.salfmIndex = i
    this.salaryform.name = this.salaryforms[i].name
    this.salaryform.phone = this.salaryforms[i].phone
    this.salaryform.designation = this.salaryforms[i].designation 
    this.salaryform.basic = this.salaryforms[i].basic
    this.salaryform.allowance = this.salaryforms[i].allowance 
    this.salaryform.deduction = this.salaryforms[i].deduction
    this.salaryform.netSalary = this.salaryforms[i].netSalary
    this.isSave = false
  }
  updateSalaryform() {
    this.isSave = true
    this.salaryforms[this.salfmIndex] = this.salaryform;
    this.resetForm()
  }
  deleteSalaryform(i: number) {
    this.salaryforms = this.salaryforms.filter((p, index) => i != index)
  }
  resetForm() {
    this.salaryform = new Salaryform();
  }

}
