import { Component } from '@angular/core';
import { AuthApiService } from '../../auth-api.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode"

interface DecodedToken {
    userId: string;
    role: string;
    // Add other properties here if needed
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userData: any = {};
    errorMessage: string = '';

    constructor(private authService: AuthApiService, private router: Router) {}

    loginUser(): void {
        this.authService.loginUser(this.userData).subscribe(
            (response: any) => {
                console.log('User logged in successfully:', response);

                // Store the token in local storage
                localStorage.setItem('user', response.token);

                // Decode the token and store the decoded information in local storage
                const decoded: DecodedToken = jwtDecode(response.token);
                localStorage.setItem('userInfo', JSON.stringify(decoded));

                console.log(decoded);

                // Check if the user is an admin
                if (decoded.role === 'admin') {
                    // Redirect to '/list' if the user is an admin
                    this.router.navigate(['/list']);
                } else {
                    // Otherwise, redirect to '/'
                    this.router.navigate(['/']);
                }
            },
            (error: any) => {
                console.error('Error logging in user:', error);
                this.errorMessage = 'Login failed. Please check your credentials and try again.';
            }
        );
    }
}
