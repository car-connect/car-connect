import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http:HttpClient, public userService:UserService) { }

  User:any={
    username:'',
    password:'',
    name:'',
  }
  addUser(){
    console.log("signup");
    
    this.userService.UserADD(this.User)
  }
  validation(){
    // console.log(this.User);
    // console.log("working");
    
    
    
    
  }

  ngOnInit(): void {
    
  }

}
