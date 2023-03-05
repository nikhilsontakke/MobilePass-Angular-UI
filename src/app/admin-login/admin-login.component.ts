import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
    username:string ="";
    password:string ="";

    doLogin(){
      console.log("username ",this.username);
      console.log("Pass ",this.password);
    }
}
