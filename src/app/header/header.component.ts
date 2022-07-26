import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }
  token(){
   return localStorage.getItem("header")
  }
 
  delToken(){
    localStorage.clear()
    localStorage.setItem('header','out')
    this.router.navigate(["login"])
  }

  ngOnInit(): void {
  }

}
