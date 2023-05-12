import { Component } from '@angular/core';
import { AdminLoginService } from '../admin-login.service';
import { DashboardsrvcService } from '../dashboardsrvc.service';
import { TableDet } from '../TableDetails';
// import { CubejsClient } from "@cubejs-client/ngx";

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})

export class HomeDashboardComponent  {
  details:TableDet=new TableDet();
  constructor(private dashboardserv :DashboardsrvcService ){
  }
  ngOnInit(){
    console.log("inside onInit")
    this.getDetails();
  }
  getDetails(){
    this.dashboardserv.getTableDetails()
    .subscribe(response => {
      this.details = response;
      console.log("inside get details")
      console.log(this.details.doorId)
    });
  }
  
}
