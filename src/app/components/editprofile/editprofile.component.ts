import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user:any=''
  username:any=''
  email:any=''
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('user')
    this.adminService.UserDetails(this.user).subscribe((res:any)=>{
      this.username=res.name || res.username; 
      this.email=res.username;

    })
  }

}
