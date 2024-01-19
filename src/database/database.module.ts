import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  providers: [...databaseProviders],
  exports: ['SEQUELIZE'],
})
export class DatabaseModule {}