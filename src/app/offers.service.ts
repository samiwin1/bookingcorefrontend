import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './features/offer/offer.interface'; 

@Injectable({
    providedIn: 'root'
})
export class OffersService {
    private baseUrl = 'http://localhost:3000/offers'; // The base URL of your backend service

    constructor(private http: HttpClient) { }

    getOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(this.baseUrl);
    }

    getOfferById(id: string): Observable<Offer> {
        return this.http.get<Offer>(`${this.baseUrl}/${id}`);
    }

    createOffer(offer: Offer): Observable<Offer> {
        return this.http.post<Offer>(this.baseUrl, offer);
    }

    updateOffer(id: string, offer: Offer): Observable<Offer> {
        return this.http.put<Offer>(`${this.baseUrl}/${id}`, offer);
    }

    deleteOffer(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
