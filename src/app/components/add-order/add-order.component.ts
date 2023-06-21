import { Component, OnInit } from '@angular/core';
import { AddOrderService } from 'src/app/add-order.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{

  selectedFiles!: FileList;
  // progressInfos = [];
  message = '';
  description: string = '';

  fileInfos!: Observable<any>;

  constructor(private addOrderService: AddOrderService) { }

  selectFiles(event: Event) {
    // this.progressInfos = [];
  
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    let isImage = true;
  
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (files.item(i)!.type.match('image.*')) {
          continue;
        } else {
          isImage = false;
          alert('invalid format!');
          break;
        }
      }
    
      if (isImage) {
        this.selectedFiles = files;
      } else {
        this.selectedFiles = new FileList;
        //event.srcElement.percentage = null;
      }
    }
    
  }

  uploadFiles(): void {
    this.message = '';
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(idx: number, file: File): void {
    // this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    this.addOrderService.upload(file, this.description).subscribe(
      event => {
        this.fileInfos = this.addOrderService.getFiles();
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        // } else if (event instanceof HttpResponse) {
        //   this.fileInfos = this.uploadService.getFiles();
        // }
      },
      err => {
        // this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }

  ngOnInit(): void {
    this.fileInfos = this.addOrderService.getFiles();
  }
}
