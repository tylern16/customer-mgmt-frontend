import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private dependentService: DependentService
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
  
}
