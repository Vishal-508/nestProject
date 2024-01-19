import { IsMobilePhone, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class MessageCreationArgs {
    @IsString()
    text: string;
  


  }