// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:8000/api/products'; 

  constructor(private http: HttpClient) {}

  // Fetch products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}
