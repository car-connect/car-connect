import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient) { }
  username:any=''
  user(){
    this.http.get(`http://localhost:8000/user/home`)
    .subscribe((res)=>{
      console.log(res);
      this.username=res

      
    })

  }

  ngOnInit(): void {
    this.user()
    

  }

}
