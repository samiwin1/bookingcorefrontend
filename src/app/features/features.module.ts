import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesRoutingModule } from './features-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LayoutComponent } from './layout/layout.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthApiService } from '../auth-api.service';
import { UserService } from '../user-api.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { OffersService } from '../offers.service';
import { OfferComponent } from './offer/offer.component';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from '../booking.service';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { ContactService } from '../contact.service';
import { ContactComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [ 
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    LayoutComponent,
    MenubarComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    OfferComponent,
    BookingComponent,
    AddOfferComponent,
    BookingsListComponent,
    ContactComponent
    
    
    
  ],
  imports: [
    FeaturesRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule // Add CommonModule here
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthApiService, UserService,OffersService,BookingService,ContactService],
})
export class FeaturesModule { }
