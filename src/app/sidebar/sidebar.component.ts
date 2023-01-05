import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide() {
    // document.getElementById('sidebar').style.display = 'none';
  }

  show() {
    // document.getElementById('sidebar').style.display = '';
  }
}
