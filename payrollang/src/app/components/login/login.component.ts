import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private storageService: StorageService, 
    private route: Router) { 
    this.formGroup = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    var isLoggedIn = this.storageService.isLoggedIn();
    if(isLoggedIn) this.route.navigate(['']);
  }

  get f(){
    return this.formGroup.controls;
  }

  onSubmit(){
    this.submitted = true;
   this.loginService.login(this.formGroup.value)
   .subscribe(res => {
    this.storageService.saveLoginInfo(res.data);
    this.route.navigate(['']);
   }, err => {
     console.log(err);
     this.route.navigate(['/login']);
   })
  }


}
