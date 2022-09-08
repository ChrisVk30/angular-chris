import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contactservice';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor (  private contactService : ContactService,
                 private httpClient : HttpClient,
    ) { }

  ngOnInit(): void {
    // this.contacts = this.contactService.getAll(); 
    
    this.httpClient
      .get<Contact[]>('http://localhost:3000/contacts')
      .subscribe((contacts : Contact[]) => {
        this.contacts = contacts;
      })
  }

  contacts : Contact[] = []

  editContact(contact: Contact) {
    console.log('contact edited');
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(o => o != contact)
  }

}
