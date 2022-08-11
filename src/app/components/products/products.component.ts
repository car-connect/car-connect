import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(public admin:AdminService,private actRoute:ActivatedRoute,public cartService:CartService) { }



  

  ngOnInit(): void {
     this.admin.GetProducts()
    .subscribe(res=>{
      console.log(res);
      
      this.productList = res;
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
  addtocart(item: any){
    this.cartService.addtoCart(item);
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
