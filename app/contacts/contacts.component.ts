import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactsService } from './contacts.service';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts: Array<Contact> = [];
  contactsUpdatedSubscription: Subscription;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.contacts;
    this.contactsUpdatedSubscription = this.contactsService.contactsUpdated
      .subscribe((contacts: Array<Contact>) => {
        this.contacts = contacts;
      });
  }

  ngOnDestroy(): void {
    this.contactsUpdatedSubscription.unsubscribe();
  }

  onNewContactSubmitted(contact: Contact): void {
    this.contactsService.addContact(contact);
  }
}