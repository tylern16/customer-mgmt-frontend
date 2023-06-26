import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { DependentComponent } from './components/dependent/dependent.component';
import { AddDependentComponent } from './components/add-dependent/add-dependent.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './route-guard.service';
import { OrderComponent } from './components/order/order.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RouteGuardService]}, //  , canActivate: [RouteGuardService]
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardService]}, //, canActivate: [RouteGuardService]
  {path: 'customers', component: CustomerCardComponent, canActivate: [RouteGuardService]},//  
  {path: 'add', component: AddCustomerComponent, canActivate: [RouteGuardService]}, //  
  {path: 'add/order', component: AddOrderComponent, canActivate: [RouteGuardService]},//  
  {path: 'dependents/:customerId', component: DependentComponent, canActivate: [RouteGuardService]},//  
  {path: 'add/dependent/:customerId', component: AddDependentComponent, canActivate: [RouteGuardService]},//  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]}, //  , canActivate: [RouteGuardService]
  {path: 'order', component: OrderComponent, canActivate: [RouteGuardService]},
  {path: 'order/:orderId', component: OrderCardComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
