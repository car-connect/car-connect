import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public http:HttpClient,public router:Router) { }

  home(){
    this.http.get(`http://localhost:8000/user/home`,{ headers: this.headers })
    .subscribe((res)=>{
      console.log("uu",res);

      
    })
  }
  getToken() {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }
  UserADD(item:any){
    this.http.post(`http://localhost:8000/user/signup`,item)
    .subscribe((res:any)=>{
      console.log(res);
      
      if(res.message=='authenticated'){

        this.router.navigate(['signupauth',{user:res.user.username}])
      }else{
        alert(res.message)

      }
      
    },
    err=>{
      console.log("error in HTTPCLIENT",err);
      
    }
    )
    
    
      
    
  }
  GoogleADD(){
    this.http.get(`http://localhost:8000/auth/google`)
    .subscribe((res)=>{
      console.log("google",res);
      
    })
  }
  loginADD(item:any){
    this.http.post(`http://localhost:8000/user/login`,item,{ headers: this.headers })
    .subscribe((res:any)=>{
      console.log("oko",res);
      if(res.message=='authenticated'){
        localStorage.setItem("token",res.token)
        localStorage.setItem("user",res.user.username)
        this.router.navigate([''])
      }
      else{
        alert("Invalid Credentials")
      }
      
    },err=>alert(err.error)
    )
  }
}
