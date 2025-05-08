import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Welcome', 'Hello and welcome to our site!', 'Admin'),
    new Message(
      '2',
      'Reminder',
      'Don’t forget to update your profile.',
      'Admin'
    ),
    new Message(
      '3',
      'Event',
      'Join our community event on Friday!',
      'CommunityBot'
    ),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
