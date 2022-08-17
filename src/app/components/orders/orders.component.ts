import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any=''
  
  constructor(public cart:CartService) { }

  ngOnInit(): void {
    this.cart.getplaceorder().subscribe((res:any)=>{

    this.orders=  res
    })
  }

}
