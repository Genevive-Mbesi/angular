
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data; 
      },
      (error) => {
        this.errorMessage = 'Error fetching products. Please try again later.';
        console.error('Error fetching products:', error);
      }
    );
  }
}
