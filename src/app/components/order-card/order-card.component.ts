import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DependentService } from 'src/app/dependent.service';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit{

  public order: Order = new Order();

  orderId: number = this.route.snapshot.params['orderId'];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.getOrder(this.orderId);
  }

  getOrder(orderId: number) {
    this.orderService.getOrderById(orderId).subscribe(
      (response)=>{
        this.order = response;
        //console.log("Get Dependents:" + this.dependents);
      },
      (error: Error) => {
        alert(error);
      }
    )
  }

}
