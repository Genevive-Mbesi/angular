
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];
  errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      (data: any[]) => {
        this.customers = data;
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Unauthorized access. Please log in.';
        } else {
          this.errorMessage = 'Error fetching customers. Please try again later.';
        }
        console.error('Error fetching customers:', error);
      }
    );
  }
}
