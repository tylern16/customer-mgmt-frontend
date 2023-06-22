import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Dependent } from 'src/app/dependent';
import { DependentService } from 'src/app/dependent.service';

@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.css']
})
export class DependentComponent implements OnInit {
  public dependents: Dependent[] = [];

  customerId: number = this.route.snapshot.params['customerId'];

  constructor(
    private route: ActivatedRoute,
    private dependentService: DependentService,
    private router: Router,
    private customerService: CustomerService
  ){}

  ngOnInit(): void {
    console.log("customerId:" + this.customerId);
    this.getDependents(this.customerId);
  }

  getDependents(customerId: number) {
    this.dependentService.getDependents(customerId).subscribe(
      (response)=>{
        this.dependents = response;
        console.log("Get Dependents:" + this.dependents);
      },
      (error: Error) => {
        alert(error);
      }
    )
  }

  goToAddDependents() {
    this.router.navigate(['/add/dependent/' + this.customerId]);
  }

  deleteDependent(dependentId: number) {
    this.dependentService.deleteDependent(dependentId).subscribe(
      (response) => {
        console.log("deleted");
        this.getDependents(this.customerId);
      },
      (error: Error) => {
        alert(error);
      }
    )
  }
  
}
