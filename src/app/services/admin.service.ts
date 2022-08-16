import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Products:any=''

  constructor(public http:HttpClient,public router:Router) { }
  UserDetails=(user:any)=>   this.http.get(`http://localhost:8000/user/details/${user}`)
  
  ImageAdd(formdata:any){
  //  const headers= new HttpHeaders({ 'Content-Type': 'multipart/formdata' })
    this.http.post(`https://api.cloudinary.com/v1_1/dg0vog2t7/upload`,formdata)
    .subscribe((res:any)=>{
      console.log(res);
      
    })
  }
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
  GetProducts=()=>this.http.get(`http://localhost:8000/user/getproduct`)
  GetProducts2=(category:any)=>this.http.get(`http://localhost:8000/user/getproduct/${category}`)
  GetUsers=()=> this.http.get(`http://localhost:8000/admin/getuser`)
  GetProduct=(id:any)=>this.http.get(`http://localhost:8000/user/product/${id}`)
  
  
      

  deleteProduct(id:any){

    return this.http.get(`http://localhost:8000/admin/deleteproduct/${id}`).subscribe((data)=>{
      console.log(data);
      
      this.router.navigate(["adminhome/manageproduct"])
      
      
    })
  }
}
