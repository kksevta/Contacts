import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  @Input() contact: any
  @Output() saveContact = new EventEmitter();
  firstName: any;
  lastName: any;
  email: any;
  contactNo: any;
  status: any;
  constructor() { }

  ngOnInit() {
    this.firstName = this.contact.firstName;
    this.lastName = this.contact.lastName;
    this.email = this.contact.email;
    this.contactNo = this.contact.contactNo;
    this.status = this.contact.status ? 'Active' : 'InActive';
  }

  save() {
    const contact = {
      id: this.contact.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      contactNo: this.contactNo,
      status: (this.status == 'Active') ? true : false

    }
    this.saveContact.emit(contact)
  }
}
