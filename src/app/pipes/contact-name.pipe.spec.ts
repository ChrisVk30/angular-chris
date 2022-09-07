import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Contact, createContact } from '../models/contact';
import { ContactNamePipe } from './contact-name.pipe'

@Component({
    template: '<div>{{ contact | contactName }}</div>',
})

export class ContactNamePipeHostComponent {
    contact!: Contact;
}

describe('Pipe: ContactName', () => {

    let sut: ContactNamePipe;

    beforeEach(() => {
        sut = new ContactNamePipe();
    });
  
    it('should concatenate a contact name', () => {
        let contact = createContact({firstName: 'Chris', surname: 'Pannenkoek'})

        const output = sut.transform(contact);
        expect(output).toBe('Chris Pannenkoek');
    });

    it('should return empty string when firstName is undefined', () => {
        let contact = createContact({firstName: undefined, surname: 'Pannenkoek'})

        const output = sut.transform(contact);
        expect(output).toBe('');
    });
    it('should return empty string when firstName is empty', () => {
        let contact = createContact({firstName: '', surname: 'Pannenkoek'})

        const output = sut.transform(contact);
        expect(output).toBe('');
    });
    it('should return only firstname when surname is empty', () => {
        let contact = createContact({firstName: 'Chris', surname: ''})

        const output = sut.transform(contact);
        expect(output).toBe('Chris');
    });
  });

describe('Pipe: ContactName in Component', () => { 

    let fixture: ComponentFixture<ContactNamePipeHostComponent>;
    let debugElement: DebugElement;
    let component: ContactNamePipeHostComponent;
    let div: HTMLDivElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactNamePipe, ContactNamePipeHostComponent]
        })

        fixture = TestBed.createComponent(ContactNamePipeHostComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        div = debugElement.query(By.css('div')).nativeElement;
    });

    it('should create an instance', () => {
        expect(fixture).toBeTruthy();
    })

    it('should concatenate a contact name in component test', () => {
        component.contact = createContact({firstName: 'Chris', surname: 'Pannenkoek'})
        fixture.detectChanges();

        expect(div.textContent?.trim()).toBe('Chris Pannenkoek');
        
    });

    it('should concatenate a contact name with trailing spaces', () => {
        component.contact = createContact({firstName: 'Chris   ', surname: 'Pannenkoek'})
        fixture.detectChanges();

        expect(div.textContent?.trim()).toBe('Chris Pannenkoek');
        
    });
});