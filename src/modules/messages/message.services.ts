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


// // getAllMessagesByUserId
// async getAllMessagesByUserId(userId: number, page: number = 1, pageSize: number = 10): Promise<{ messages: Message[], totalCount: number }> {
//   const offset = (page - 1) * pageSize;
//   const limit = pageSize;

//   const messages = await Message.findAll({
//     where: { userId },
//     offset,
//     limit,
//     include: [{ model: Contacts, as: 'user' }], // Include associations if needed
//   });

//   const totalCount = await Message.count({ where: { userId } });

//   return { messages, totalCount };

// }

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




  // const message: any = await Message.findAll({
  //   where:{userId},
  //   offset: page && page !== 0 ? (page - 1) * (pageSize || 10) : undefined,
  //   limit: pageSize && pageSize !== 0 ? pageSize : undefined,
    
  // });
  
  // const response: any = {
  //   status: "success",
  //   statusCode: 200,
  //   message: "Videos fetched successfully",
  //   data: {
  //     ...message,
  //   },
  // };
  
  // if (page && page !== 0 && pageSize && pageSize !== 0) {
  //   response.data.page = page || 1;
  //   response.data.totalPages = Math.ceil(message.count / (pageSize || 10));
  // }
  //   const totalCount = await Message.count({ where: { userId } });
  
  // return response;
  // return {  response, totalCount };


}






}
