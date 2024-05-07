import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }
  
  // Add more methods for other API endpoints in the auth microservice as needed
}
