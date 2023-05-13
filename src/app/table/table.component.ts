import { Component } from '@angular/core';
import { DashboardsrvcService } from '../dashboardsrvc.service';
import { TableDet } from '../TableDetails';
import { PutDataService } from '../put-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  details:TableDet=new TableDet();
  constructor(private dashboardserv :DashboardsrvcService,private putData:PutDataService ){
  }
// headers=["Username","Employee Name","Room", "Entry Time"]
headers=["name","nfcId","username", "doorId"]
name: string;
nfcId:string;
username: string;
doorId:string;
// rows:any=[
// {
//   "Username":"Utex",
//   "Employee Name":"Sejal utekar",
//   "Room":"1321D",
//   "Entry Time":"12:33"
// },
// {
//   "Username":"Sontex",
//   "Employee Name":"Nikhil Sontakke",
//   "Room":"1223D",
//   "Entry Time":"12:56"
// }
// ]
rows:any=[{}]
ngOnInit(){
  this.getDetails();
  
}
add(){
  this.putData.addRoom().subscribe((data: any) => {
    console.log("inside AddRoom",data);
    
  });
}
delete(){
  this.putData.removeRomoe().subscribe((data: any) => {
    console.log("inside AddRoom",data);
    
  });
}
getDetails(){
  this.dashboardserv.getTableDetails()
  .subscribe(response => {
    this.rows = response;
    console.log("inside get details")
    console.log("this is row data ",this.rows)
    console.log(this.rows.Type)
  });
}
}
