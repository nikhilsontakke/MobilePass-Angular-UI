import { Component } from '@angular/core';
import {Admin} from '../admin';
import { AdminLoginService } from '../admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin: Admin = new Admin();
  admin2: Admin = new Admin();
    username:string ="nikhil.sontakke19@vit.edu";
    password:string ="Nikhil@123";
    
    constructor(private adminLoginService :AdminLoginService,private router: Router ){
    }

    doLogin(){
      this.admin2.username="nikhil.sontakke19@vit.edu"
      this.admin2.password=this.password
      this.adminLoginService.adminLogin(this.admin2)
      .subscribe((data: any) => {
        console.log("inside doLogin",data);
        this.gotoTable();
      });
    }
    onSubmit(){
      this.gotoTable();
    }
    gotoTable() {
      this.router.navigate(['/table']);
    }
}
