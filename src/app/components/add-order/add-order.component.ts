import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  selectedFile = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    //this.http.post('')
    //      NEED TO CONFIGURE BACKEND FOR ORDERS
  }
}
