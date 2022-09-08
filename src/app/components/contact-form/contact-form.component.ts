import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contactservice';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private contactService : ContactService ) { }

  // @Output()
  // addNewContact = new EventEmitter<Contact>();

  ngOnInit(): void {
    console.log('On Init called!')
  }

  addContactForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
      nonNullable: true
    }),
    surname: new FormControl('', { 
      validators: [Validators.required],
      nonNullable: true 
    }),
    email: new FormControl('', { 
      validators: [
        Validators.pattern('^.+@.+\.nl$'),
        Validators.required
      ],
      nonNullable: true })
    });

  get email() { return this.addContactForm.controls.email }
    
  addContact() {
    this.contactService.addContact(this.addContactForm.value as Contact);
    // this.addNewContact.emit(this.addContactForm.value as Contact);
    // this.addContactForm.reset();
  }

}
