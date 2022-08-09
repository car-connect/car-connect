import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public admin:AdminService,private actRoute:ActivatedRoute) { }
  products:any=''
  category:any=''

  ngOnInit(): void {
    this.category=this.actRoute.snapshot.params['category']
    this.admin.GetProducts2(this.category).subscribe((res:any)=>{
      this.products=res
     
      
    })
  }

}
