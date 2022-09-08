import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactService } from 'src/app/services/contactservice';

import { ContactListComponent } from './contact-list.component';

class FakeContactService {
  getAll() {}
}

describe('Component: ContactListComponent', () => {
  
  let sut: ContactListComponent;
  let fakeContactService : ContactService;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ ContactListComponent ] ,
      providers : [ { provide: ContactService, useClass: FakeContactService } ]
    })
    sut = TestBed.createComponent(ContactListComponent).componentInstance;
    fakeContactService = TestBed.inject(ContactService);
    spyOn(fakeContactService, 'getAll')
  })

  it('Should work and get all contacts', () => {
    sut.ngOnInit();
    expect(fakeContactService.getAll).toHaveBeenCalled();
  })
  

})
