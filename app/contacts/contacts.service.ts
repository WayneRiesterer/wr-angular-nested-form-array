import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from './models/contact.model';

@Injectable()
export class ContactsService {
  contacts: Array<Contact> = [];
  contactsUpdated = new Subject<Contact[]>();

  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactsUpdated.next([...this.contacts]);
    console.log(this.contacts);
  }
}