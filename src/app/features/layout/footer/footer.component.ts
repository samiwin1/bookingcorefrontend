import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  // You can now add methods to navigate using the Router service, e.g.
  navigateTo(route: string) {
      this.router.navigate([route]);
  }
}
