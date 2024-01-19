import { IsMobilePhone, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class ContactsRegistrationArgs {
    @IsString()
    userName: string;
  

    @IsString()
    profession: string; 
    

    @MinLength(10)
    @IsOptional()
    @IsMobilePhone()
    mobile: string;
  

    @IsOptional()
    address:string;
  
    @IsOptional()
    imageURL:string;
  }

  export class ContactUpdateArgs {
    @IsOptional()
    @IsNotEmpty()
    userName: string;
  
    @IsString()
    @IsNotEmpty()
    profession: string; 
    
    @MinLength(10)
    @IsOptional()
    @IsNotEmpty()
    @IsMobilePhone()
    mobile: string;

    @IsOptional()
    address:string;
  
    @IsOptional()
    imageURL:string;
  }
  