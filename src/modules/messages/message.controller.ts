import { Body, Controller, Get, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { MessageService } from "./message.services";
import { MessageCreationArgs } from "./message.args";
import { Message } from "src/database/entity/message.entity";

@Controller("message")
export class MessageController{

    constructor(
      private messageService:MessageService
      ){}

      // create message by user id
      @Post('create/:userId')
      async createMessageByUserId(
        @Param('userId') userId: number,
        @Body() messageData: Partial<Message>,
      ): Promise<Message> {
        try {
          const createdMessage = await this.messageService.createMessageByUserId(userId, messageData);
          return createdMessage;
        } catch (error) {
          if (error instanceof NotFoundException) {
            // Handle not found exception
            throw new NotFoundException(error.message);
          }
          // Handle other exceptions
          throw error;
        }
      }


// get all messages by user id
@Get('user/:userId')
async getAllMessagesByUserId(
  @Param('userId') userId: number,
  @Query('page') page: number,
  @Query('pageSize') pageSize: number,
): Promise<{ messages: Message[], totalCount: number }> {
  try {
    const result = await this.messageService.getAllMessagesByUserId(userId, page, pageSize);
    return result;
  } catch (error) {
    if (error instanceof NotFoundException) {
      // Handle not found exception
      throw new NotFoundException(error.message);
    }
    // Handle other exceptions
    throw error;
  }
}

}