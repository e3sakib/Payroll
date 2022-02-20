import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  Employees: any;
  searchQueryEmployee: any;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  onPrint() {
    // this.saveInvoice()
    // console.log(this.invoiceData.paymentDate);

    let printContents = document.getElementById("pdf")!.innerHTML;
    let originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    // console.log(this.invoiceData.paymentDate + "ujfhugh");

  }
  searchEmployee() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:9988/employee/search?searchText=' + this.searchQueryEmployee, { headers })
      .subscribe(map => {
        this.Employees = map.Data;
        console.log(map.Data);
      })
  }

}
