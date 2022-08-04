import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Products:any=''

  constructor(public http:HttpClient,public router:Router) { }
  tokenCheck(){
    return localStorage.getItem('token')
  }
  adminADD(item:any){
    this.http.post(`http://localhost:8000/admin/login`,item)
    .subscribe((res:any)=>{
      console.log(res);
      
      if(res=='no'){
        alert("No User Found")
      }
      else if(res.auth==false){
        alert("invalid Password")
      }
      else if(res.auth==true){
        localStorage.setItem('token',res.token)
        this.router.navigate(["adminhome"])
      }
      console.log(res);
      
    })
  }
  productADD(item:any){
    this.http.post(`http://localhost:8000/admin/addproduct`,item)
    .subscribe((res:any)=>{
      this.router.navigate(["adminhome/manageproduct"])
      
    })
  }
  GetProducts(){
   return this.http.get(`http://localhost:8000/admin/getproduct`)
    
      
      
      
 
    
  }
  deleteProduct(id:any){

    return this.http.get(`http://localhost:8000/admin/deleteproduct/${id}`).subscribe((data)=>{
      console.log(data);
      
      this.router.navigate(["adminhome/manageproduct"])
      
      
    })
  }
}
