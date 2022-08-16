import { Component, OnInit } from '@angular/core';
// declare var $:JQueryStatic;
import * as $ from 'jquery' 
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor() { }

  
  getLocation=()=> {
   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(this.showPosition);
    }
   else {
     const err:any= document.getElementById("temp")
     err.innerHTML="Geolocation is not supported by this browser."
   }
 }
 
 showPosition =(position:any)=> {
 
          $.get(`http://api.weatherapi.com/v1/current.json?key=f03551e36a9742a2a9591530220908&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`,(res:any,status:any)=>{
          console.log(res)
          const loc_name:any=document.getElementById("temp")
          loc_name.innerHTML=res.location.region
          const deg:any=  document.getElementById("loc")
          deg.innerHTML=`${res.current.feelslike_c} ℃`
          const loc_id:any=  document.getElementById("tz")
          loc_id.innerHTML=res.location.tz_id
          const txt:any= document.getElementById("text")
          txt.innerHTML=res.current.condition.text
          $("#img").attr("src",res.current.condition.icon)
          })
 
 
 }
 getEmployee(){
  
 }
  ngOnInit(): void {
  }

}
