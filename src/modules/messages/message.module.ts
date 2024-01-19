import { Module } from "@nestjs/common";
import { MessageController } from "./message.controller";
import { MessageService } from "./message.services";

@Module({
    imports:[],
    controllers:[MessageController],
    providers:[MessageService]
})

export class MessageModule{};