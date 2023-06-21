import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { DependentComponent } from './components/dependent/dependent.component';
import { AddDependentComponent } from './components/add-dependent/add-dependent.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerCardComponent,
    AddCustomerComponent,
    AddOrderComponent,
    DependentComponent,
    AddDependentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HeaderComponent,
    OrderComponent,
    OrderCardComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
