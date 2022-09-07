import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from '../models/contact'

@Pipe({ name : 'contactName'})
export class ContactNamePipe implements PipeTransform {
    transform(contact: Contact) : string {
        if (contact.firstName) {
            if(contact.surname)
                return `${contact.firstName.trim()} ${contact.surname.trim()}`;
            return `${contact.firstName.trim()}`
        }
        return ''
    }

}