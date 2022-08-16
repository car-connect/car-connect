import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ProductList:any=''
  grandTotal:any=''
  constructor(public cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts1()
    this.cart.getProducts()
   .subscribe((res:any)=>{
     this.ProductList = res.products;
     this.grandTotal = this.cart.getTotalPrice();
   })
   

  }
  removeItem(item: any){
    console.log("item",item);
    
    this.cart.removeCartItem(item).subscribe((res:any)=>{
      console.log(res);
      this.cart.getProducts()
   .subscribe((res:any)=>{
     this.ProductList = res.products;
     this.grandTotal = this.cart.getTotalPrice();
   })
     })
  }
  emptycart(){
    this.cart.removeAllCart();
  }

}
