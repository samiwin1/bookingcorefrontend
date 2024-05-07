import { Component } from '@angular/core';
import { Contact } from '../../contact.model'; 
import { ContactService } from '../../contact.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactComponent {
    contactForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            const contactData: Contact = this.contactForm.value;
            
            // Call the service method to send contact data
            this.contactService.sendContactForm(contactData).subscribe(
                response => {
                    // Handle successful submission (e.g., show a success message)
                    console.log('Contact form submitted successfully:', response);
                    this.contactForm.reset(); // Reset the form after submission
                },
                error => {
                    // Handle error (e.g., show an error message)
                    console.error('Error submitting contact form:', error);
                }
            );
        }
    }
}
