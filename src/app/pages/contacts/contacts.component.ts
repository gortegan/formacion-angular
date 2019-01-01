import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[];
  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

  getHttpContacts() {
    this._contactsService.getContactsHttp().subscribe((response: any[]) => {
      this.contacts = response;
    });
  }

  getFrontEndContacts() {
    this.contacts = this._contactsService.getContacts();
  }
}
