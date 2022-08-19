import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(public router:Router , public cartService:CartService) {
   this.totalItem= this.cartService.countWish
    // .subscribe((res:any)=>{
    //   this.totalItem = res.products.length;
      
    // })
   }
   addproduct(){
    localStorage.setItem('operation','add')
   }
  token(){
   return localStorage.getItem("header")
  }
 
  delToken(){
    // this.cartService.removeAllCart()
    localStorage.clear()
    localStorage.setItem('header','out')
    localStorage.setItem('operation','add')
    this.router.navigate(["login"])
  }
  logout(){
    localStorage.setItem('header','out')
    localStorage.removeItem('token')
    this.router.navigate(["/admin"])

  }
  

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.totalItem=res.products.length
    })
   
    
  }

}
