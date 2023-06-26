import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/order';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  public currentOrderId = 0;

  public orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrders().subscribe(
      (response: Order[]) => {
        this.orders = response;
        //console.log("GetOrders: ");
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(
      (response) => {
        console.log("deleted");
        this.getOrders();
      },
      (error: Error) => {
        alert(error);
      }
    )

    this.closeModal();
  }

  viewOrderById(orderId: number) {
    this.router.navigate(['/order/' + orderId]);
  }

  openModal(orderId : number) {
    this.currentOrderId = orderId;
    //console.log("open modal");
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal() {
    console.log("close modal");
    const modalDiv = document.getElementById("myModal");
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

}
