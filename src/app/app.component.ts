import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact, createContact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onHoveredSpanInChild(value : string) {
    console.log('Message: ', value);
  }

  onButtonClickInChild(value : string) {
    console.log('Message: ', value);
  }

  // someObject : any = {};

  // objectArray : any = [];

  // street = 'Kennedylaan';
  // number = 30;
  // name = 'world'
  // password = '******'
  // correct = false;
  // image = 'https://pbs.twimg.com/media/BEVT-ULCEAAjhxM.jpg'
  // price = 5;

  // onSubmit() {
  //   this.objectArray.push(this.someObject);
  //   this.someObject = {};
  // }

  // onClicking() {
  //   alert('Hi there!');
  //   this.street = 'Wolframstraat';
  // }

  // onHovering() {
  //   alert('Hovered over the div!')
  // }

  // makeHigher() {
  //   if (this.price < 10)
  //     this.price += 1;
  // }

  // lowerPrice() {
  //   this.price -= 5;
  // }

  message = 'hallo vanuit parent'
  toonLifecycle = true;
  get email() { return this.addContactForm.controls.email }

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

  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' },
  ];


  // nu = new Date();
  
  // newContact: Contact = createContact();

  name: string = 'World!';

  editContact(contact: Contact) {
    console.log('contact edited');
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(o => o != contact)
  }

  addContact() {
    this.contacts.push(this.addContactForm.value as Contact);
    console.log('Submitted value:', this.addContactForm.value);
    this.addContactForm.reset();
  }
}

// createContact({firstName: 'foo' });
// createContact({surname: 'foo' });
// createContact({email: 'foo' });