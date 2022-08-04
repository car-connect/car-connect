import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminmanageproduct',
  templateUrl: './adminmanageproduct.component.html',
  styleUrls: ['./adminmanageproduct.component.css']
})
export class AdminmanageproductComponent implements OnInit {
  products:any=''
  constructor(public admin:AdminService,public http:HttpClient) { }


  ngOnInit(): void {
    //this.admin.GetProducts()
    this.http.get(`http://localhost:8000/admin/getproduct`)
    .subscribe((res:any)=>{
      this.products=res
      console.log(this.products);
      
      
      
    })
    
    
   console.log(this.admin.Products);
   
  }

}
