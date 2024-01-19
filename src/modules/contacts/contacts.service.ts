import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ContactUpdateArgs, ContactsRegistrationArgs } from "./contacts.args";
import { Contacts } from "src/database/entity/contact.entity";


@Injectable()
export class ContactsService{

constructor(){}

// create contact
async createContact(contactData: Partial<Contacts>): Promise<Contacts> {
  return await Contacts.create(contactData);
}

// get all contacts
async getAllContacts(): Promise<Contacts[]> {
  return await Contacts.findAll();
}


// get contact by id
async getContactById(id: number): Promise<Contacts> {
  return await Contacts.findByPk(id);
}


// update contact
async updateContact(id: number, updatedContactData: Partial<Contacts>): Promise<Contacts> {
  const contactToUpdate = await Contacts.findByPk(id);

  if (!contactToUpdate) {
    throw new NotFoundException(`Contact with ID ${id} not found`);
  }
  
  await contactToUpdate.update(updatedContactData);

  return contactToUpdate;
}

// delete contact
async deleteContact(id: number): Promise<void> {
  const contactToDelete = await Contacts.findByPk(id);

  if (!contactToDelete) {
    throw new NotFoundException(`Contact with ID ${id} not found`);
  }

  await contactToDelete.destroy();
}


}