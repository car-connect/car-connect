import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Product } from './type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public countWish:number=0;
  check:any=''



  constructor(public http:HttpClient) {}
   getProducts1=()=> {
    this.productList.asObservable().subscribe((res:any)=>{
      this.countWish=res.length
    })
    return  this.productList.asObservable()
   }
   getProducts=()=>{
    let user=localStorage.getItem('user')

    return this.http.get(`http://localhost:8000/user/getcart/${user}`)
   }
   setProducts=(product:any)=> {
    this.cartItemList.push(...product);
    this.productList.next(product)
   }
    containsObject=(product:any, cartItemList:any)=> {
    var i;
    for (i = 0; i < cartItemList.length; i++) {
        if (cartItemList[i]._id === product._id) {
            return true;
        }
    }

    return false;
}
   addtoCart=(product:any)=>{
     this.check= this.containsObject(product,this.cartItemList)
     console.log(this.check);
     if(this.check==false){

       this.cartItemList.push(product);
       this.productList.next(this.cartItemList)
       this.getProducts();
       this.getProducts1()
       console.log(this.cartItemList);
       
       let user=localStorage.getItem('user')
       this.http.post(`http://localhost:8000/user/addtocart`,{cart:this.cartItemList,user:user}).subscribe((data)=>{
        console.log(data);
        
       })
     }
     else if(this.check==true){
      // let user=localStorage.getItem('user')

      // this.http.post(`http://localhost:8000/user/addtocart`,{cart:product,user:user}).subscribe((data)=>{
      //   console.log(data);
        
      //  })
      console.log("same product carted");
      
      
     }
     
    
   }
   getTotalPrice() : number{
    let grandTotal:number = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal = (Number(grandTotal) +Number(a.product_price));
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
    console.log(product);
    let user=localStorage.getItem('user')
    
   return this.http.post(`http://localhost:8000/user/deletecartproduct/${user}`,this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    let user=localStorage.getItem('user')
    this.http.delete(`http://localhost:8000/user/deletecart/${user}`).subscribe((res:any)=>{
      console.log(res);
      
  
     })
  }

   
 
}





