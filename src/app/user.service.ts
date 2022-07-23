import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient,public router:Router) { }

  UserADD(item:any){
    this.http.post(`http://localhost:8000/user/signup`,item)
    .subscribe((res:any)=>{
      if(res.message=='authenticated'){

        this.router.navigate(['login'])
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
    this.http.post(`http://localhost:8000/user/login`,item)
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
