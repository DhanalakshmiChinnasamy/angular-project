import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardAccountComponent } from '../dashboard-account/dashboard-account.component';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { NotificationComponent } from '../notification/notification.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sidebarvar: boolean = true;
  constructor(
  private dialog:MatDialog, 

  ) { }

  ngOnInit(): void {
  }
 
  notifications() {
    this.dialog.open(NotificationComponent, {
      width: '30%',
      height: '40%',
    
    });
  }
  userDetails(){
    this.dialog.open(DashboardAccountComponent,{
      width: '30%',
      height: '40%',
    });
  }
  
  sidebar() {
    // this.sidebarvar = !this.sidebarvar;
    // if (this.sidebarvar == false) {
    //   this.sideBar.hide();
    //   this.homeComponent.hider();
    // } else {
    //   this.homeComponent.shower();
    //   this.sideBar.show();
    // }
  }
}


