import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  registerUser(formData: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:3000/api'; // Replace with your backend API base URL

  constructor(private http: HttpClient) { }

  // Example method for fetching data from a backend endpoint
  fetchData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/endpoint`);
  }

  // Example method for sending data to a backend endpoint
  sendData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/endpoint`, data);
  }

  // Add more methods for other API endpoints as needed
}
