import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Products:any=''

  constructor(public http:HttpClient,public router:Router) { }

  UserDetails=(user:any)=>      this.http.get(`https://car-connect123.herokuapp.com/user/details/${user}`)

  tokenCheck=()=>               localStorage.getItem('token')

  productEDIT=(item:any)=>      this.http.post(`https://car-connect123.herokuapp.com/admin/editproduct/${item.Name}`,item.Product)

  GetProducts=()=>              this.http.get(`https://car-connect123.herokuapp.com/user/getproduct`)

  GetProducts2=(category:any)=> this.http.get(`https://car-connect123.herokuapp.com/user/getproduct/${category}`)

  GetUsers=()=>                 this.http.get(`https://car-connect123.herokuapp.com/admin/getuser`)

  GetProduct=(id:any)=>         this.http.get(`https://car-connect123.herokuapp.com/user/product/${id}`)
  
  adminADD=(item:any)=>         this.http.post(`https://car-connect123.herokuapp.com/admin/login`,item)
  
  productADD=(item:any)=>       this.http.post(`https://car-connect123.herokuapp.com/admin/addproduct`,item)
      
  deleteUser=(id:any)=>         this.http.delete(`https://car-connect123.herokuapp.com/admin/deleteuser/${id}`)
  
  deleteProduct=(id:any)=>      this.http.get(`https://car-connect123.herokuapp.com/admin/deleteproduct/${id}`)
  
  // ImageAdd(formdata:any){
  // //  const headers= new HttpHeaders({ 'Content-Type': 'multipart/formdata' })
  //   this.http.post(`https://api.cloudinary.com/v1_1/dg0vog2t7/upload`,formdata)
  //   .subscribe((res:any)=>{
  //     console.log(res);
      
  //   })
  // }
}
