import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactSelectedEvent = new Subject<Contact>();
  contactListChangedEvent = new Subject<Contact[]>();

  private contacts: Contact[] = [];
  private maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (let contact of this.contacts) {
      const currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact): void {
    if (!newContact) return;

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  updateContact(originalContact: Contact, newContact: Contact): void {
    if (!originalContact || !newContact) return;

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) return;

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  deleteContact(contact: Contact): void {
    if (!contact) return;

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) return;

    this.contacts.splice(pos, 1);
    this.contactListChangedEvent.next(this.contacts.slice());
  }
}
