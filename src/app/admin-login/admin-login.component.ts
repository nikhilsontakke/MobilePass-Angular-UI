import { Component } from '@angular/core';
import {Admin} from '../admin';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin: Admin = new Admin();
    username:string ="";
    password:string ="";

    constructor(private adminLoginService :AdminLoginService ){
    }

    doLogin(){
      console.log("username ",this.admin.username);
      console.log("Pass ",this.admin.password);
      this.adminLoginService.adminLogin(this.admin)
      .subscribe((data: any) => {
        console.log(data);
        
      });
    }
    onSubmit(){
     
    }
}
