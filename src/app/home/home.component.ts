import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient,public users:UserService) { }
  username:any=''
  user(){
    
    this.users.home()

  }
  UserInfo(){
    this.username= localStorage.getItem('user')
  }
  

  ngOnInit(): void {
    localStorage.setItem('header','user')
    this.user()
    this.UserInfo()

  }

}
