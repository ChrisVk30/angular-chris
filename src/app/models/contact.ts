export interface Contact {
    firstName: string;
    surname: string;
    email: string;
}

export function createContact(overrides?: Partial<Contact>): Contact {
    return {
        firstName: '',
        surname: '',
        email: '',
        ...overrides
    }
}