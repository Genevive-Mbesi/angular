## Angular Authentication App
This is an Angular application that implements JWT-based authentication with a Laravel backend. The app includes a login form where users can log in with their email and password, and it interacts with the Laravel API to handle authentication.
#### Project Setup
Install Node.js and Angular CLI: Ensure you have Node.js installed. Then, install Angular CLI globally by running:

#### bash
      npm install -g @angular/cli
      
#### Clone the Repository:

#### bash
    git clone https://github.com/Genevive-Mbesi/angular.git
    cd angular-authentication-app

#### Install Dependencies:

#### bash
    npm install
#### Configure Backend: Ensure that you have the Laravel API running with the authentication route /api/login in place. This API is required to authenticate the user and return a JWT token.

#### Features
    JWT Authentication: Users can log in with their credentials, and the JWT token is stored in localStorage for session management.
    Login Form: A reactive login form using Angular's ReactiveFormsModule.
    Routing: Simple routing setup to navigate between login and dashboard components.
    API Integration: Communication with a Laravel backend for user authentication.
    Error Handling: Basic error handling to display feedback to users.


### Running the Project
Run the Angular Development Server:

#### bash
    ng serve --open
This will open the application in your default web browser at http://localhost:4200.
Make sure the Laravel API is running at http://localhost:8000.

#### Login Process
The login form is created using Angular's ReactiveFormsModule. Users provide an email and password.

On form submission, the credentials are sent to the Laravel API at http://localhost:8000/api/login. If the credentials are valid, a JWT token is returned and stored in localStorage.

Upon successful login, the user is redirected to the dashboard.


#### Dependencies
    Angular: Frontend framework
    @auth0/angular-jwt: Handles JWT-based authentication.
    ReactiveFormsModule: For creating reactive forms in Angular.
    HttpInterceptors: For making HTTP requests to the backend.
    Node.js: JavaScript runtime environment for running the development server.
    Angular CLI: Command-line interface for Angular. 
    
#### Install the necessary dependencies by running:

##### To modify the API URL or other configuration details, edit the following files:

    login.component.ts: Update the API URL in the onSubmit() method for the login request.
    environment.ts: You can add an environment file to handle API base URLs for different environments (development, production).
