import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiServerUrl}/orders`);
  }

  public getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiServerUrl}/order/${orderId}`);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiServerUrl}/add/order`, order);
  }

  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiServerUrl}/update/order`, order);
  }

  public deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/order/${orderId}`);
  }


}

  // private baseUrl = 'http://localhost:8080';

  // constructor(private http: HttpClient) { }

  // upload(file: File, description: string): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('description', description);
  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload?description=${description}`, formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
