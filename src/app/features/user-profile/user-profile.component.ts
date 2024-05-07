import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-api.service'; // Import your user service
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  userId: string = '';
  userData: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
