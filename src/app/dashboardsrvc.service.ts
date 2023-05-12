import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TableDet } from './TableDetails';
@Injectable({
  providedIn: 'root'
})
export class DashboardsrvcService {

  constructor(private http: HttpClient) { }
  
  getTableDetails() {
    
    
    console.log("gettabledetails is : ")
    // const options = {headers: {'Content-Type': 'application/json'}};
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<TableDet>("http://localhost:8081/activitylogs") ;

  }
}
