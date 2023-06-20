import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependent } from 'src/app/dependent';
import { DependentService } from 'src/app/dependent.service';

@Component({
  selector: 'app-add-dependent',
  templateUrl: './add-dependent.component.html',
  styleUrls: ['./add-dependent.component.css']
})
export class AddDependentComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private dependentService: DependentService,
    private router: Router
  ){}

  ngOnInit(): void {
    console.log(this.customerId);
  }

  customerId: number = this.route.snapshot.params['customerId'];

  dependent: Dependent = new Dependent();

  saveCard(){
    this.dependentService.addDependent(this.customerId, this.dependent).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/dependents/' + this.customerId]);
    },
    (error: Error) => console.log(error));
  }

  onSubmit(){
    console.log(this.dependent);
    this.saveCard();
  }

}
