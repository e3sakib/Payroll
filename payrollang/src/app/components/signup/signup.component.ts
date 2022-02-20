import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup = new Signup();
  signups: Signup[] = [];
  isSave: boolean = true
  empIndex: number = -1

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.load();
  }
  load() {
    this.http.get<any>('http://localhost:8081/getOneUser/{fdsfdsf}').subscribe(signups => {
      console.log(signups + "M");

      this.signups = signups;
    }
    )
  }

  addUser() {
    console.log(this.signup);
    this.signups.push(this.signup)
    console.log(this.signup);

    const headers = { "content-Type": "application/json" }

    this.http.post("http://localhost:8081/save", JSON.stringify(this.signup), { 'headers': headers }).subscribe(data => {

      console.log(data);

    }

    )

alert("Added")
    this.gotologin();
  }

  resetForm() {
    this.signup = new Signup();
  }

  editUser(i: number) {
    this.empIndex = i
    this.signup.name = this.signups[i].name
    this.signup.username = this.signups[i].username
    this.signup.password = this.signups[i].password
    this.signup.remarks = this.signups[i].remarks
    this.isSave = false
  }
  updateUser() {
    this.isSave = true
    this.signups[this.empIndex] = this.signup;
    this.resetForm()
  }
  deleteUser(i: number) {
    this.signups = this.signups.filter((p, index) => i != index)
  }
gotologin(){
 this.router.navigate(["/login"]);
}


}
