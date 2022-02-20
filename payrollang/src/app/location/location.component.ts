import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  divisions: any = [];
  districts: any = [];
  division: string = '-1'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDivisions();
  }

  getDivisions(){
    this.http.get<any>('https://bdapis.herokuapp.com/api/v1.1/divisions')
    .subscribe(res=>{      
      this.divisions = res.data;      
    })
  }

  getDistricts(){
    this.http.get<any>('https://bdapis.herokuapp.com/api/v1.1/division/'+this.division)
    .subscribe(res=>{
      console.log(res.data);   
      this.districts = res.data;
    })
  }

}
