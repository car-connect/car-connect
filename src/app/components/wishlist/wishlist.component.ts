import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public cartService:WishlistService) { }

  public products:any='' 
  public grandTotal:any=''
  public countWish:number=0;
  
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      console.log("inn",res);
      
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item).subscribe((res:any)=>{
      console.log(res);
      this.cartService.getProducts()
    .subscribe(res=>{
      console.log("inn",res);
      
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
      
    })
  }
  

}
