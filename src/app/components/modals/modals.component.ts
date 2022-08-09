import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor() { }
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

  ngOnInit(): void {
  }

}
