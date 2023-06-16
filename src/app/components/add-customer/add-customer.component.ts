import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customer.name = '';
  }

  saveCard(){
    this.customerService.addCustomer(this.customer).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/customers']);
    },
    (error: Error) => console.log(error));
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCard();
  }

}

