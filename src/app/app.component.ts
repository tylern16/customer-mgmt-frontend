import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers() {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        console.log("GetCustomers: " + response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
}
