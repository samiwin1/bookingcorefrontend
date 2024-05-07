import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service'; 
import { Booking } from '../../booking-model'; 

@Component({
    selector: 'app-bookings-list',
    templateUrl: './bookings-list.component.html',
    styleUrls: ['./bookings-list.component.css'],
})
export class BookingsListComponent implements OnInit {
    bookings: Booking[] = [];

    constructor(private bookingService: BookingService) {}

    ngOnInit(): void {
        this.bookingService.getBookings().subscribe(
            (data: Booking[]) => {
                this.bookings = data;
            },
            (error) => {
                console.error('Error fetching bookings:', error);
            }
        );
    }
    deleteBooking(id: string): void {
        this.bookingService.deleteBooking(id).subscribe(() => {
            this.bookings = this.bookings.filter(booking => booking._id !== id);
        });
    }
    
}
