import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(public router:Router , public cartService:CartService) { }
  token(){
   return localStorage.getItem("header")
  }
 
  delToken(){
    this.cartService.removeAllCart()
    localStorage.clear()
    localStorage.setItem('header','out')
    this.router.navigate(["login"])
  }
  logout(){
    localStorage.setItem('header','out')
    localStorage.removeItem('token')

  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.totalItem = res.products.length;
      
    })
  }

}
