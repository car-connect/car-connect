import { Component, OnInit } from '@angular/core';
declare function slide():void;
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor() {
    //  slide()
   }

  ngOnInit(): void {
    localStorage.setItem('header','admin')

    const open:any = document.getElementById('open');
    const close:any = document.getElementById('close');
    const container:any = document.querySelector('.container');

    open.addEventListener('click', () => container.classList.add('show-nav'));
    close.addEventListener('click', () => container.classList.remove('show-nav'))
    
  }

}
