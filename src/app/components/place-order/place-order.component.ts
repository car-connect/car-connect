import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  cartItems:any=''
  grandTotal:any=''
  user:any=''
  createdAt:any=''
  constructor(public cart:CartService,public adminService:AdminService) { }

  placeorder(){
    let date=Date.now()
    this.cart.placeorder({cart:this.cartItems,time:date}).subscribe((res)=>{
      console.log(res);
      
    })
  }
  ngOnInit(): void {
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
