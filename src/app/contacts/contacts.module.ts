import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { SharedModule } from '../shared/shared.module';
import { EditContactComponent } from './contacts-table/edit-contact/edit-contact.component';
import { AddContactComponent } from './contacts-table/add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ],
  declarations: [ContactsComponent, ContactsTableComponent, EditContactComponent, AddContactComponent]
})
export class ContactsModule { }
