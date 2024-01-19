import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsRegistrationArgs } from './contacts.args';
import { Contacts } from 'src/database/entity/contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async createContact(@Body() contactData: Partial<Contacts>): Promise<Contacts> {
    return await this.contactsService.createContact(contactData);
  }

  @Get()
  async getAllContacts(): Promise<Contacts[]> {
    return await this.contactsService.getAllContacts();
  }

  @Get(':id')
  async getContactById(@Param('id') id: number): Promise<Contacts> {
    return await this.contactsService.getContactById(id);
  }


// test update
@Put('update/:id')
async updateContact(@Param('id') id: number, @Body() updatedContactData: Partial<Contacts>): Promise<Contacts> {
  try {
    const updatedContact = await this.contactsService.updateContact(id, updatedContactData);
    return updatedContact;
  } catch (error) {
    if (error instanceof NotFoundException) {
    
      throw new NotFoundException(error.message);
    }
   
    throw error;
  }
}

// delete contact
@Delete('delete/:id')
  async deleteContact(@Param('id') id: number): Promise<void> {
    try {
      await this.contactsService.deleteContact(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
     
        throw new NotFoundException(error.message);
      }
    
      throw error;
    }
  }



}
