'use server'
import Contact from "@/model/Contact"
import db from "./db"
import { revalidatePath } from "next/cache"
 import {redirect} from "next/navigation"


export const addContact = async(FormData) => {
    const {firstName, lastName , email , phone} = Object.fromEntries(FormData)

    try{
        db.connectToDB()
        const newContact = new Contact({
            firstName, lastName, email, phone
        })
        await newContact.save()
    }catch(error) {
        throw new error ("Failed to Create Contact", error)
    }
    revalidatePath("/")
    redirect("/")
}

export const updateContact = async (FormData) => {
    const {id, firstName, lastName, email, phone} = 
    Object.fromEntries(FormData)
    try {
        db.connectToDB()
        const updateFields = {
            firstName, lastName, email, phone
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
        await Contact.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update Contact " + error)
    }
    revalidatePath("/")
    redirect("/")
}

export const deleteContact = async (FormData) => {
    const {id} = Object.fromEntries(FormData)
    try {
        db.connectToDB()
        await Contact.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete Contact " + error)
        
    }
    revalidatePath("/")

}

