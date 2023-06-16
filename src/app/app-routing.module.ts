import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { CustomerCardComponent } from './components/customer-card/customer-card.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomerCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
