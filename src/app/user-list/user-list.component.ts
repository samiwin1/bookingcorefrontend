import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-api.service';  
import { User } from '../user.interface';  

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onDelete(userId: string | undefined): void {
    if (!userId) {
      console.error('Invalid user ID:', userId);
      return;
    }
  
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }
  
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Remove the deleted user from the users array
        this.users = this.users.filter(user => user._id !== userId);
        console.log('User deleted successfully.');
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }

  onEdit(userId: string | undefined): void {
    if (!userId) {
      console.error('Invalid user ID:', userId);
      return;
    }
  
    // Redirect to the edit component with the user's ID as a route parameter
    this.router.navigate(['/edit', userId]);
  }
  onAddUser(): void {
    // Navigate to the add component
    this.router.navigate(['/add']);
  }
  goToBookingList() {
    this.router.navigate(['/bookinglist']);
}

}
