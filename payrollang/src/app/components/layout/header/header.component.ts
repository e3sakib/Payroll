import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logoutvar:StorageService,private router:Router) { 
    
  }

  ngOnInit(): void {
   
  }

  logoutmethod(){
     this.logoutvar.logout();
     this.router.navigateByUrl("login") 
  }

}
