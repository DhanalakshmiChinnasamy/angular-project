import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hider() {
    console.log('dhanam');
    
    // document.getElementById('content').style.width = '100%';
  }

  shower() {
    console.log('open');
    
    // document.getElementById('content').style.width = 'calc(100% - 250px)';
  }
}
