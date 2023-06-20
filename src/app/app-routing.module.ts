import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { DependentComponent } from './components/dependent/dependent.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomerCardComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'add/order', component: AddOrderComponent},
  {path: 'dependents/:customerId', component: DependentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
