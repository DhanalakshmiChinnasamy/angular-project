import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
  hider() {
    // document.getElementById('content').style.width = 'calc(100% - 250px)';
    
    // const element=document.getElementById('content');{
    //   if(element){
    //     element.style.width = '100%';
    //   }
    // }
  }

  shower() {
    // document.getElementById('content').style.width = 'calc(100% - 250px)';
  }

}
