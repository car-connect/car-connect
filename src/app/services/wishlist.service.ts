import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public countWish:number=0;

  constructor(public http:HttpClient) { }
  getProducts=()=>{
    this.productList.asObservable().subscribe((res:any)=>{

      this.countWish=res.length
    });

    // return this.productList.asObservable();
    let user=localStorage.getItem('user')
    return this.http.get(`http://localhost:8000/user/getwishproducts/${user}`)
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
    let user=localStorage.getItem('user')
   return this.http.post(`http://localhost:8000/user/addtowish`,{wish:this.cartItemList,user:user})
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    let user=localStorage.getItem('user')
   return this.http.post(`http://localhost:8000/user/deletewishproduct/${user}`,this.cartItemList)

  }
 
}
