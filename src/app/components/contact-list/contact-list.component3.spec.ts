import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactService } from 'src/app/services/contactservice';

import { ContactListComponent } from './contact-list.component';

describe('Component: ContactListComponent', () => {
  
  let sut: ContactListComponent;
  let mockContactService : ContactService = jasmine.createSpyObj('mockContactService',['getAll']);

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ ContactListComponent ] ,
      providers : [ { provide: ContactService, useValue: mockContactService } ]
    })
    sut = TestBed.createComponent(ContactListComponent).componentInstance;
    // fakeContactService = TestBed.inject(ContactService);
    // spyOn(fakeContactService, 'getAll')
  })

  it('Should work and get all contacts', () => {
    sut.ngOnInit();
    expect(mockContactService.getAll).toHaveBeenCalled();
  })
  

})
