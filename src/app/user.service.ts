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
    .subscribe((res)=>{
      if(res=="User Inserted"){

        this.router.navigate(['login'])
      }else{
        alert(res)

      }
      
    },
    err=>{
      console.log(err);
      
    }
    )
    
    
      
    
  }
  GoogleADD(){
    this.http.get(`http://localhost:8000/auth/google`)
    .subscribe((res)=>{
      console.log("google",res);
      
    })
  }
}
