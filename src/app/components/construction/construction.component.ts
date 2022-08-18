import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
 

  constructor() { }
  

  

 

  ngOnInit(): void {
    let progress:any = document.getElementById('demo')
    let percentage:any = document.getElementById('demo2')

    let per = 0;
    function progressLoad(){
        if(per>=80){
          
            progress.style.width = `80%`;
            percentage.innerHTML = "80%";
            

        }else{
            progress.style.width = `${per}%`;
            percentage.innerHTML = `${per}%`;

        }
        per++

    }

    setInterval(progressLoad,90)
  }


  
}
