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
  constructor(public admin:AdminService) { }


  ngOnInit(): void {
    this.admin.GetProducts() .subscribe((res:any)=>{
      this.products=res
    })
    
    
   
  }

}
