import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking-model'; 

@Injectable({
    providedIn: 'root',
})
export class BookingService {
    private apiUrl = 'http://localhost:3000/bookings'; // Update with your backend URL

    constructor(private http: HttpClient) {}

    addBooking(booking: Booking): Observable<Booking> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Booking>(this.apiUrl, booking, { headers });
    }
    getBookings(): Observable<Booking[]> {
      return this.http.get<Booking[]>(this.apiUrl);
  }
  deleteBooking(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
}

  
}

 
  

