import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactService } from 'src/app/services/contactservice';

import { ContactListComponent } from './contact-list.component';

describe('Component: ContactListComponent', () => {
  
  let sut: ContactListComponent;
  let contactService : ContactService;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ ContactListComponent ] ,
      providers : [ ContactService ]
    })
    sut = TestBed.createComponent(ContactListComponent).componentInstance;
    contactService = TestBed.inject(ContactService);
    spyOn(contactService, 'getAll');
  })

  it('Should work and get all contacts', () => {
    sut.ngOnInit();
    expect(contactService.getAll).toHaveBeenCalled();
  })
  

})
