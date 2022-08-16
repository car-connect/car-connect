import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any=''
  createdAt:any=''
  public countWish:number=0;

  constructor(public adminService:AdminService,public Wish:WishlistService) { }


  ngOnInit(): void {
    this.user=localStorage.getItem('user')
    this.adminService.UserDetails(this.user).subscribe((res:any)=>{
      let date=new Date(res.createdAt)
      this.createdAt=date.toDateString()
    })
   this.countWish= this.Wish.countWish
  }

}
