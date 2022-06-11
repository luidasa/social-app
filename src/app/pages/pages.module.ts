import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { PlacesComponent } from './places/places.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    PlacesComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
