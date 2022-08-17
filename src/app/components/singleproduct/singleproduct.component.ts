import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
id:any=''
product:any=''
  constructor(private actRoute:ActivatedRoute,public admin:AdminService,public cartService:CartService) { }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  er(){
    return localStorage.getItem('header')
    
  }
  ngOnInit(): void {
    this.id=this.actRoute.snapshot.params['id']
    this.admin.GetProduct(this.id).subscribe((res:any)=>{
      console.log("r",res);
      
      this.product=res

    })


  }

}
