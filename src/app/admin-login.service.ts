import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
// import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  // private baseUrl = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }

  adminLogin(admin: Admin){
    
    const body=JSON.stringify(admin)
    console.log("adminlogin service: ",body)
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.post("http://localhost:8080/login/useradmin",body,options);
  }

}
