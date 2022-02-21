import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  fileToUpload: any;
  
  //submitted: false;
  formGroup: FormGroup ;
  constructor(private http: HttpClient, private fb: FormBuilder, private router:Router) { 
    this.formGroup= this.fb.group({
      email: ['', [Validators.required]],
    })
  }
  get f() {
    return this.formGroup.controls;
  }
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

   fileChange(files: any) {
    debugger;
    this.fileToUpload = files.files[0]
  }
  save(){
    //this.submitted = true;

    // debugger;
    const formData: FormData = new FormData();
    // formData.append('id', this.ep['id'].toString());
    
    // formData.append('name',this.signup['name']);
    // formData.append('email',this.signup['email']);
    // formData.append('designation',this.signup."designation");
  
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
   

    
    this.http.post("http://localhost:8081/saveemployee_withfile", formData)
    .subscribe(res => {
      console.log(res);
     
     
    }, err => {
      console.log("error");
      
    })


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
