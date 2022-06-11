import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { UsersModalComponent } from './users-modal/users-modal.component';



@NgModule({
  declarations: [
    ChatModalComponent,
    UsersModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatModalComponent,
    UsersModalComponent
  ]
})
export class WidgetsModule { }
