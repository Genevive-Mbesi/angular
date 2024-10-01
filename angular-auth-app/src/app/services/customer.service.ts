// src/app/services/customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'http://localhost:8000/api/customers'; 

  constructor(private http: HttpClient) {}

  // Fetch customers with JWT token
  getCustomers(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.get<any[]>(this.customersUrl, { headers });
  }
}
