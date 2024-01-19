import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ContactModule } from './modules/contacts/contacts.module';
import { MessageModule } from './modules/messages/message.module';

@Module({
  imports: [DatabaseModule,ContactModule,MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
