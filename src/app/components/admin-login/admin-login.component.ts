import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public admin:AdminService,private router:Router) { }
  Admin:any={
    username:'',
    password:''
  }
  
  AdminADD(){
    this.admin.adminADD(this.Admin).subscribe((res:any)=>{
      console.log("adminLogin",res);
      
      if(res.message==false){
        alert("No User Found")
      }
      else if(res.auth==false){
        alert("invalid Password")
      }
      else if(res.auth){
        localStorage.setItem('token',res.token)
        this.router.navigate(["adminhome"])
      }
      console.log("AdminLogin",res);
      
    })

  }

  ngOnInit(): void {
  }

}
