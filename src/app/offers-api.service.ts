// src/app/offers.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private baseUrl = 'http://localhost:3000/offers'; 

  constructor(private http: HttpClient) {}

  getOffers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getOfferById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
