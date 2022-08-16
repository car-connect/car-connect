import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit {

  cartItems:any=''
  grandTotal:any=''
  user:any=''
  createdAt:any=''
  date=new Date(Date.now());
  orderDate:any=''
  constructor(public cart:CartService,public adminService:AdminService) { }

  ngOnInit(): void {
    this.orderDate=this.date.toDateString()
    this.cart.getProducts().subscribe((res:any)=>{
      this.cartItems=res.products
      this.grandTotal = this.cart.getTotalPrice();

    })
    this.user=localStorage.getItem('user')
    this.adminService.UserDetails(this.user).subscribe((res:any)=>{
      let date=new Date(res.createdAt)
      this.createdAt=date.toDateString()
    })
  }

}
