import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardsrvcService {

  constructor(private http: HttpClient) { }
  
  getTableDetails(){
    
    
    console.log("gettabledetails is : ")
    const options = {headers: {'Content-Type': 'application/json'}};
    
    return this.http.get("http://192.168.1.96:8080/activitlogs") ;

  }
}
