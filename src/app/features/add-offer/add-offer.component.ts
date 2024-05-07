import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from '../../offers.service'; 
import { Offer } from '../offer/offer.interface'; 

@Component({
    selector: 'app-add-offer',
    templateUrl: './add-offer.component.html',
    styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {
    offer: Offer = {
        id: '',
        name: '',
        description: '',
        price: 0,
        startDate: new Date(),
        endDate: new Date(),
        hotelStars: 0,
        place: '',
        transport: '',
        goingOutTimesPerWeek: 0,
        goingOutType: '',
        imageUrl: []
    };
    formatDateToYMD(date: Date): string {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    constructor(private offersService: OffersService, private router: Router) {}

    onSubmit(): void {
        this.offersService.createOffer(this.offer).subscribe(
            () => {
                console.log('Offer created successfully.');
                this.router.navigate(['/offers']); // Redirect to the offers page
            },
            error => {
                console.error('Error creating offer:', error);
            }
        );
    }
}
