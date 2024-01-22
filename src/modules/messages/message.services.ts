import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { MessageCreationArgs } from "./message.args";
import { Message } from "src/database/entity/message.entity";
import { InjectModel } from "@nestjs/sequelize";
import { Contacts } from "src/database/entity/contact.entity";
import { ContactsService } from "../contacts/contacts.service";


@Injectable()
export class MessageService{

constructor(
 
){}


// create message by user
async createMessageByUserId(userId: number, messageData: Partial<Message>): Promise<Message> {
  // Check if the user exists
  const user = await this.getContactById(userId);

  if (!user) {
    throw new NotFoundException(`Contact with ID ${userId} not found`);
  }

  // Create the message with the provided data
  const createdMessage = await Message.create({ ...messageData, userId });

  return createdMessage;
}

async getContactById(id: number): Promise<Contacts | null> {
  const contact = await Contacts.findByPk(id);

  if (!contact) {
    throw new NotFoundException(`Contact with ID ${id} not found`);
  }

  return contact;
}



async getAllMessagesByUserId(userId: number, page: number = 1, pagesize: number = 5): Promise<{ messages: Message[], totalCount: number }> {
  // Check if the user exists
  const user = await this.getContactById(userId);

  if (!user) {
    throw new NotFoundException(`Contact with ID ${userId} not found`);
  }

  // Calculate pagination parameters
  const offset = (page - 1) * pagesize;
  const limit = pagesize;

  // Retrieve messages for the user with pagination
  const messages = await Message.findAll({
    where: { userId },
    offset,
    limit,
    include: [{ model: Contacts, as: 'user' }],
  });

  // Retrieve total count of messages for the user
  const totalCount = await Message.count({ where: { userId } });

  return { messages, totalCount };

}

// get all contacts
async getAllMessage(): Promise< Message[]> {
  return await Message.findAll();
}



}
