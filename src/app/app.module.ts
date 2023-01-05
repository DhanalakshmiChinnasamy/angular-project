import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AmChartComponent } from './am-chart/am-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { UsersComponent } from './users/users.component';
import { ReferTableComponent } from './refer-table/refer-table.component';
import { NotificationComponent } from './notification/notification.component';
import { AngularMaterialModule } from './shared/Material/angularMaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAccountComponent } from './dashboard-account/dashboard-account.component';
import { HomeComponentComponent } from './home-component/home-component.component';
// import * as CanvasJSAngularChart from '../../src/app/';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainscreenComponent,
    AmChartComponent,
    PieChartComponent,
    UsersComponent,
    ReferTableComponent,
    NotificationComponent,
    // CanvasJSChart,
    DashboardAccountComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
