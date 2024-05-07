import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact.model'; // Define a model for Contact

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private apiUrl = 'http://localhost:3000/contacts'; // Update with your microservice URL

    constructor(private http: HttpClient) {}

    sendContactForm(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.apiUrl, contact);
    }
}
