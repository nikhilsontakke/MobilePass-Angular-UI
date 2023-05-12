import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { TableComponent } from './table/table.component';
// import { OrdersTableComponent } from './orders-table/orders-table.component';
// import { DashComponent } from './dash/dash.component';

const routes: Routes = [{
    path: 'admin-login', component: AdminLoginComponent
  },
{
  path: 'home',component:HomeDashboardComponent
},
{
   path: 'table', component:TableComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
