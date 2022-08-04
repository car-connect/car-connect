import { Component, OnInit } from '@angular/core';
declare function slide():void;
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() {
    //  slide()
   }

  ngOnInit(): void {
    localStorage.setItem('header','admin')
  }

}
