import { DATE, INTEGER, NUMBER, STRING } from "sequelize";
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Message } from "./message.entity";

@Table({
    tableName: 'contacts',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at', 
  })

  export class Contacts extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'entity Id' })
    userId: number;
  
    @Column({ type: DataType.STRING, allowNull: false, comment: 'userName' })
    userName: string;
  
    @Column({ type: DataType.INTEGER, comment: 'mobile' })
    mobile: number;
  
    @Column({ type: DataType.STRING, comment: 'profession' })
    profession: string;
  
    @Column({ type: DataType.STRING, comment: 'address' })
    address: string;
  
    @Column({ type: DataType.STRING, comment: 'imageURL' })
    imageURL: string;
  
    @HasMany(() => Message, 'userId') 
    messages: Message[];
















    // @PrimaryKey
    // @AutoIncrement
    // @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'user Id' })
    // id: number;
  
    // @Column({ type: DataType.STRING, allowNull: false, comment: 'userName' })
    // userName: string;
  
    // @Column({ type: DataType.INTEGER, comment: 'mobile' })
    // mobile: number;
  
    // @Column({ type: DataType.STRING, comment: 'profession' })
    // profession: string;
  
    // @Column({ type: DataType.STRING, comment: 'address' })
    // address: string;
  
    // @Column({ type: DataType.STRING, comment: 'imageURL' })
    // imageURL: string;
  
    // @HasMany(() => Message)
    // messages: Message[];
  

  }