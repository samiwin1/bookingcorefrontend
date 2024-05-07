import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user-api.service'; 
import { User } from '../user.interface'; 

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formData: User = {
    _id: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    role:''
  };
  userId: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.fetchUserData();
    });
  }

  fetchUserData(): void {
    if (!this.userId) {
      console.error('User ID is empty.');
      return;
    }
  
    this.userService.getUserById(this.userId).subscribe(
      (data: User) => {
        // Check if data is null before assigning it to formData
        if (data) {
          this.formData = data;
        } else {
          console.error('User data is null.');
        }
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  onSubmit(): void {
    this.userService.updateUser(this.userId, this.formData).subscribe(
      response => {
        console.log('User data updated successfully:', response);
        // Optionally, you can display a confirmation message to the user
      },
      error => {
        console.error('Error updating user data:', error);
        // Log the error status and message
        if (error && error.status && error.error && error.error.message) {
          console.error(`Status: ${error.status}, Message: ${error.error.message}`);
        }
      }
    );
  }
}
