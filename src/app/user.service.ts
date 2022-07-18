import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient,public router:Router) { }

  UserADD(item:any){
    this.http.post(`http://localhost:8000/user`,item)
    .subscribe((res)=>{
      this.router.navigate(['login'])
      console.log("yeh",res);
      
    },
    err=>{
      console.log(err);
      
    }
    )
    
    
      
    
  }
}
