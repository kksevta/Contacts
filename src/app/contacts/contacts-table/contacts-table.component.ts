import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  // @Input() contacts: any;
  editContactModalBool: boolean = false;
  addContactModalBool: boolean = false;
  headers = [
    {
      id: 0,
      name: 'firstname',
      displayName: 'First Name'
    },
    {
      id: 1,
      name: 'lastname',
      displayName: 'Last Name'
    },
    {
      id: 2,
      name: 'email',
      displayName: 'Email'
    },
    {
      id: 3,
      name: 'contactno',
      displayName: 'Contact No'
    },
    {
      id: 4,
      name: 'status',
      displayName: 'Status'
    },
    {
      id: 5,
      name: 'edit',
      displayName: 'Edit Contact'
    }
  ]

  contacts = [
    {
      id: 0,
      firstName: 'Sahil',
      lastName: 'Sahil',
      email: 'India',
      contactNo: 945654564,
      status: true
    },
    {
      id: 1,
      firstName: 'Sahil',
      lastName: 'Sahil',
      email: 'India',
      contactNo: 945654564,
      status: false
    }
  ];

  editContact: any;
  constructor(private _ref: ChangeDetectorRef) { }

  ngOnInit() {

  }

  trackByForHeaders(index, item) {

  }

  trackByForRows(index, item) {

  }
  tableClickEvent(event) {
    const target = event.target;
    switch (target.name) {
      case 'btnEdit':
        this.perfromEditRowEvent(target)
        break;
      default:
        break;
    }
  }

  perfromEditRowEvent(target) {
    this.editContactModalBool = true;
    this.editContact = {
      ... this.contacts.find((contact) => {
        return contact.id == target.id
      })
    }
  }

  perfromSwitchStatusEvent(target) {

  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  statusSwitch(event, id) {
    this.contacts = this.contacts.map((contact) => {
      if (contact.id == id) {
        return {
          ...contact, status: event
        }
      }
      return contact
    })
  }

  closeEditDialog() {
    this.editContactModalBool = false;
  }

  closeAddDialog() {
    this.addContactModalBool = false;
  }

  addContactBool() {
    this.addContactModalBool = true;
  }

  saveEditedContact(editedContact) {
    this.editContactModalBool = false;
    this.contacts = this.contacts.map((contact) => {
      if (contact.id == editedContact.id) {
        return {
          ...editedContact,
        }
      }
      return contact;
    })
  }

  saveNewContact(contact) {
    this.addContactModalBool = false;
    this.contacts.push(contact);
  }
}
