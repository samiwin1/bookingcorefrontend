import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../offers.service'; 
import { Offer } from './offer.interface'; 

@Component({
  selector: 'app-offers',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    // Fetch offers from backend when component initializes
    this.offersService.getOffers().subscribe(data => {
      this.offers = data;
    });
  }
}
