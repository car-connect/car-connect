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
    this.cart.getProducts()
   .subscribe((res:any)=>{
     this.ProductList = res.products;
     this.grandTotal = this.cart.getTotalPrice();
   })
   

  }
  removeItem(item: any){
    this.cart.removeCartItem(item);
  }
  emptycart(){
    this.cart.removeAllCart();
  }

}
