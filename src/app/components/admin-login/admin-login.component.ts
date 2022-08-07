import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public admin:AdminService) { }
  Admin:any={
    username:'',
    password:''
  }
  
  AdminADD(){
    this.admin.adminADD(this.Admin)

  }

  ngOnInit(): void {
  }

}
