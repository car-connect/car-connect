import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public http:HttpClient,public router:Router) { }

  getToken=()=> localStorage.getItem('token');

  home(){
    this.http.get(`https://car-connect123.herokuapp.com/user/home`,{ headers: this.headers })
    .subscribe((res)=>{
      console.log("check Home",res);
    })
  }
  
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }


  UserADD(item:any){
    this.http.post(`https://car-connect123.herokuapp.com/user/signup`,item)
    .subscribe((res:any)=>{
      console.log("Signup",res);
      
      if(res.message=='authenticated'){

        this.router.navigate(['signupauth',{user:res.user.username}])
      }else{
        alert(res.message)

      }
      
    },
    err=>{
      console.log("error in HTTPCLIENT",err);
      
    })
  }


  GoogleADD(){
    this.http.get(`https://car-connect123.herokuapp.com/auth/google`)
    .subscribe((res)=>{
      console.log("Google",res);
      
    })
  }


  loginADD(item:any){
    this.http.post(`https://car-connect123.herokuapp.com/user/login`,item,{ headers: this.headers })
    .subscribe((res:any)=>{
      console.log("LoggedIN",res);
      if(res.message=='authenticated'){
        localStorage.setItem("token",res.token)
        localStorage.setItem("user",res.user.username)
        localStorage.setItem('header','user')
        this.router.navigate([''])
      }
      else{
        alert("Invalid Credentials")
      }
      
    },err=>alert(err.error)
    )
  }
}
