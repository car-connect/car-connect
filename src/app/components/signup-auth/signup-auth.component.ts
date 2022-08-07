import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-auth',
  templateUrl: './signup-auth.component.html',
  styleUrls: ['./signup-auth.component.css']
})
export class SignupAuthComponent implements OnInit {

  constructor(public router:Router,public route:ActivatedRoute,public http:HttpClient) { }
  user:any=''
  Key:any=''
  authPass(){
    console.log("suni");
    console.log(this.Key);
    
    this.http.post(`http://localhost:8000/user/authpass`,{key:this.Key})
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(["login"])
      
    })

  }
  ngOnInit(): void {
  this.user=this.route.snapshot.paramMap.get('user')
  console.log("usss",this.user);
  
  
  }

}
