import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;


      this.http.post('your-api-endpoint', loginData).subscribe(
        (response) => {
          this.successMessage = 'Login successful!';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Login failed! Please check your credentials.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
      this.successMessage = '';
    }
  }
}
