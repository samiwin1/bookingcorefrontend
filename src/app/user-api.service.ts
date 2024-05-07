import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface'; // Import the User interface

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users'; // Base URL of your NestJS backend

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(userId: string): Observable<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  updateUser(userId: string, updatedUser: User): Observable<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.put<User>(url, updatedUser);
  }

  deleteUser(userId: string): Observable<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.delete<User>(url);
  }
}
