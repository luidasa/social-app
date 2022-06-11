import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { PlacesComponent } from './places/places.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    PlacesComponent,
    NotificationsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WidgetsModule
  ]
})
export class PagesModule { }
