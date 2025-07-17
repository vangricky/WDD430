import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  private messages: Message[] = [];
  private maxMessageId: number = 0;

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http
      .get<Message[]>(
        'https://wdd430-ce7ad-default-rtdb.firebaseio.com/messages.json'
      )
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages || [];
          this.maxMessageId = this.getMaxId();
          this.messages.sort((a, b) => a.id.localeCompare(b.id));
          this.messageChangedEvent.emit(this.messages.slice());
        },
        (error: any) => {
          console.error('Error fetching messages:', error);
        }
      );
  }

  storeMessages() {
    const messagesJson = JSON.stringify(this.messages);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .put(
        'https://wdd430-ce7ad-default-rtdb.firebaseio.com/messages.json',
        messagesJson,
        { headers: headers }
      )
      .subscribe(() => {
        this.messageChangedEvent.emit(this.messages.slice());
      });
  }

  getMessage(id: string): Message | null {
    return this.messages.find((message) => message.id === id) || null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (let message of this.messages) {
      const currentId = parseInt(message.id, 10);
      if (!isNaN(currentId) && currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addMessage(message: Message) {
    if (!message) return;

    this.maxMessageId++;
    message.id = this.maxMessageId.toString();
    this.messages.push(message);
    this.storeMessages();
  }

  addMessages(messages: Message[]) {
    this.messages.push(...messages);
    this.storeMessages();
  }
}
