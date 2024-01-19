import { Sequelize } from 'sequelize-typescript';
import config from '../config/env';
import { ItemPromotion } from './entity/test.entity';
import { Message } from './entity/message.entity';
import { Contacts } from './entity/contact.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...config.database,
        dialect: 'mysql',
        logging: false,
        models: [
            // ItemPromotion,
            Message,
            Contacts 
        ],
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];