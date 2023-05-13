import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PutDataService {

  constructor(private http: HttpClient) { }
  addRoom(){
    return this.http.post("","")
  }
  removeRomoe(){
    return this.http.delete("");
  }
}
