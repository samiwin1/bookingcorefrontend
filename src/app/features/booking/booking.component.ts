import { Component } from '@angular/core';
import { BookingService } from '../../booking.service'; 
import { Booking } from '../../booking-model'; 
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [DatePipe]
})
export class BookingComponent {
    booking: Booking = {
        name: '',
        email: '',
        checkInDate: new Date(),
        checkOutDate: new Date(),
        adults: 1,
        children: 0,
        specialRequests: '',
        _id: ''
    };

    constructor(private bookingService: BookingService) {}

    onSubmit(): void {
        this.bookingService.addBooking(this.booking).subscribe(
            (response) => {
                console.log('Booking created successfully:', response);
            },
            (error) => {
                console.error('Error creating booking:', error);
            }
        );
    }
}
