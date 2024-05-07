import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { HommmeeComponent } from './hommmee/hommmee.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { OfferComponent } from './offer/offer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingComponent } from './booking/booking.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
const routes: Routes = [
    { path: '', component: LayoutComponent, children: [ 
      
      { path: '', component: HommmeeComponent },
     
      { path: 'contact', component: ContactComponent },
      { path: 'packs', component: OfferComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'booking', component: BookingComponent },




    ] },
    { path: 'register', component: RegisterComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'edit/:id', component: EditUserComponent },
    { path: 'list', component: UserListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bookinglist', component:     BookingsListComponent},

    

    











    // Add other routes if necessary
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
