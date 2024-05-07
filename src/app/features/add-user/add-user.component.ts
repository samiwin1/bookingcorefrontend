import { Component } from '@angular/core';
import { UserService } from '../../user-api.service';
import { User } from '../../user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  formData: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    role: ''
  }; // Object to store form data

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.createUser(this.formData).subscribe(
      (response: User) => {
        console.log('User created successfully:', response);
        // Optionally, you can navigate to another page or perform other actions upon successful creation
      },
      (error: any) => {
        console.error('Error creating user:', error);
        // Optionally, you can display an error message to the user
      }
    );
  }
}
