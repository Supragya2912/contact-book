'use server'
import db from './db'
import Contact from '@/model/Contact'

export const getContacts = async () => {
    try {
        db.connectToDB();
        const contacts = await Contact.find({})
        return contacts

    } catch (err) {
        console.error(err);
    }
}

export const getContact = async (id) => {
    try {
        db.connectToDB();
        const contact = await Contact.find(id);
        return contact;

    } catch (err) {
        console.log(err);
    }
}