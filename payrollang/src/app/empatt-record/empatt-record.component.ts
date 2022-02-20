import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empatt-record',
  templateUrl: './empatt-record.component.html',
  styleUrls: ['./empatt-record.component.css']
})
export class EmpattRecordComponent implements OnInit {

  ngOnInit(): void {
  }
  today: number = Date.now();

constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
}
}
