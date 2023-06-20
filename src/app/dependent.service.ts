import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dependent } from './dependent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DependentService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getDependents(customerId: number): Observable<Dependent[]> {
    return this.http.get<Dependent[]>(`${this.apiServerUrl}/customer/${customerId}/dependents`);
  }

  public addDependent(customerId: number, dependent: Dependent): Observable<Dependent> {
    return this.http.post<Dependent>(`${this.apiServerUrl}/customer/${customerId}/dependents`, dependent);
  }

  public deleteDependent(dependentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/dependents/${dependentId}`);
  }

}
