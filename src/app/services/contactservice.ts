import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactService {
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' },
  ];

  getAll(): Contact[] {
    return this.contacts;
  }

  addContact(value: Contact) : void {
    this.contacts.push(value);
  }
}