import { Component } from '@angular/core';
import { AuthApiService } from '../../auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData: any = {};

  constructor(private authService: AuthApiService) {}

  registerUser(): void {
    this.authService.registerUser(this.userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Optionally, you can navigate to another page or display a success message
      },
      (error) => {
        console.error('Error registering user:', error);
        // Optionally, you can display an error message to the user
      }
    );
  }
}
