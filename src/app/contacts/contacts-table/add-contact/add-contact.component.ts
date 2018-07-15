import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Output() saveContact = new EventEmitter();
  firstName: any;
  lastName: any;
  email: any;
  contactNo: any;
  status: any;
  constructor() { }

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.contactNo = '';
    this.status = 'Active';
  }


  save() {
    const contact = {
      id: Math.floor(Math.random() * 100000) + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      contactNo: this.contactNo,
      status: (this.status == 'Active') ? true : false

    }
    this.saveContact.emit(contact)
  }
}
