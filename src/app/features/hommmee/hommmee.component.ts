import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hommmee',
  standalone: true,

  templateUrl: './hommmee.component.html',

})
export class HommmeeComponent {
  constructor(private router: Router) {}

 
  navigateTo(route: string) {
    this.router.navigate([route]);
}
}