import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice:UserService) { }
  User:any={
    username:'',
    password:''
  }
  UserADD(){
    this.userservice.loginADD(this.User)
  }
  google(){
    this.userservice.GoogleADD()

  }

  ngOnInit(): void {
  }

}
