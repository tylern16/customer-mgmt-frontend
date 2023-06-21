import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order: Order = new Order();

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.order.name = '';
  }

  saveCard(){
    this.orderService.addOrder(this.order).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/order/' + this.order.id]);
    },
    (error: Error) => console.log(error));
  }

  onSubmit(){
    console.log(this.order);
    this.saveCard();
  }
}


// selectedFiles!: FileList;
// // progressInfos = [];
// message = '';
// description: string = '';

// fileInfos!: Observable<any>;

// constructor(private addOrderService: AddOrderService) { }

// selectFiles(event: Event) {
//   // this.progressInfos = [];

//   const inputElement = event.target as HTMLInputElement;
//   const files = inputElement.files;

//   let isImage = true;

//   if (files && files.length > 0) {
//     for (let i = 0; i < files.length; i++) {
//       if (files.item(i)!.type.match('image.*')) {
//         continue;
//       } else {
//         isImage = false;
//         alert('invalid format!');
//         break;
//       }
//     }
  
//     if (isImage) {
//       this.selectedFiles = files;
//     } else {
//       this.selectedFiles = new FileList;
//       //event.srcElement.percentage = null;
//     }
//   }
  
// }

// uploadFiles(): void {
//   this.message = '';

//   for (let i = 0; i < this.selectedFiles.length; i++) {
//     this.upload(i, this.selectedFiles[i]);
//   }
