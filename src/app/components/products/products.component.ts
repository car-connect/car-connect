import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  category:any=''
  constructor(public admin:AdminService,private actRoute:ActivatedRoute,public cartService:CartService,public wishService:WishlistService) { }


  addtowish(item:any){
    this.wishService.addtoCart(item).subscribe((res:any)=>{
      console.log(res);
      
    })

  }
  er(){
    return localStorage.getItem('header')
    
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  ngOnInit(): void {
    this.category=this.actRoute.snapshot.params['category']
    this.admin.GetProducts2(this.category).subscribe((res:any)=>{
      this.productList=res


    // })
    //   this.filterCategory = res;
    //   this.productList.forEach((a:any) => {
    //     if(a.category ==="women's clothing" || a.category ==="men's clothing"){
    //       a.category ="fashion"
    //     }
    //     Object.assign(a,{quantity:1,total:a.price});
    //   });
    //   console.log(this.productList)
    // });

    // this.cartService.search.subscribe((val:any)=>{
    //   this.searchKey = val;
    })
  }
  
  // filter(category:string){
  //   this.filterCategory = this.productList
  //   .filter((a:any)=>{
  //     if(a.category == category || category==''){
  //       return a;
  //     }
  //   })
  // }

}
