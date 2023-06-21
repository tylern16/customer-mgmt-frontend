import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit{
  public customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers() {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        //console.log("GetCustomers: ");
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe(
      (response) => {
        console.log("deleted");
        this.getCustomers();
      },
      (error: Error) => {
        alert(error);
      }
    )
  }

  viewDependents(customerId: number) {
    this.router.navigate(['/dependents/' + customerId]);
  }
}
