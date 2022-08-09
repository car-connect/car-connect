import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  constructor(public admin:AdminService) { }
  Product:any={
    product_id:'',
    product_name:'',
    product_price:'',
    product_description:'',
    product_category:'',
    available_quantity:'',
    percentage_discount:'',
    upload_date:'',
  }
  image:any=''
  handleImage(){
   const formdata=new FormData;
   formdata.append("file",this.image)
   formdata.append("upload_preset","rjrvq9il")
   this.image.withCredentials = false;
   this.admin.ImageAdd(formdata)

  }

  ProductAdd(){
    this.admin.productADD(this.Product)

  }
  setImage(e:any){
    console.log(e.target.files[0]);
    this.image=e.target.files[0];
    
  }

  ngOnInit(): void {
  }

}
