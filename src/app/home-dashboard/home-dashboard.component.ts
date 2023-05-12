import { Component } from '@angular/core';
import { AdminLoginService } from '../admin-login.service';
import { DashboardsrvcService } from '../dashboardsrvc.service';
// import { CubejsClient } from "@cubejs-client/ngx";

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  constructor(private dashboardserv :DashboardsrvcService ){
  }
  getDetails(){
    this.dashboardserv.getTableDetails()
    .subscribe((data: any) => {
      console.log(data);
    });
  }
  
}
