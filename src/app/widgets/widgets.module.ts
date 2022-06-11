import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { UserCardProfileComponent } from './user-card-profile/user-card-profile.component';
import { AboutMeCardComponent } from './about-me-card/about-me-card.component';
import { MyPhotosCardComponent } from './my-photos-card/my-photos-card.component';
import { MyProfileCardComponent } from './my-profile-card/my-profile-card.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [
    ChatModalComponent,
    UsersModalComponent,
    UserCardProfileComponent,
    AboutMeCardComponent,
    MyPhotosCardComponent,
    MyProfileCardComponent,
    PlaceCardComponent,
    EventCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatModalComponent,
    UsersModalComponent,
    UserCardProfileComponent,
    AboutMeCardComponent,
    MyPhotosCardComponent,
    PlaceCardComponent,
    EventCardComponent,
    MyProfileCardComponent,
  ]
})
export class WidgetsModule { }
