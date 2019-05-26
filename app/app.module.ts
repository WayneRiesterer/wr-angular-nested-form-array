import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ContactsComponent, ContactFormComponent, ContactListComponent ],
  bootstrap: [ AppComponent ],
  providers: [ContactsService]
})
export class AppModule {}
