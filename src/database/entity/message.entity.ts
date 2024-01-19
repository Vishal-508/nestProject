import {  DATE, INTEGER, STRING } from "sequelize";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Contacts } from "./contact.entity";

@Table({
    tableName: 'message',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
})
export class Message extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'entity Id' })
    id: number;
  
    @Column({ type: DataType.STRING, comment: 'text' })
    text: string;
  
    @ForeignKey(() => Contacts)
    @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'user Id' })
    userId: number;
  
    @BelongsTo(() => Contacts)
    user: Contacts;



    

















    // @PrimaryKey
    // @AutoIncrement
    // @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'entity Id' })
    // id: number;
  
    // @Column({ type: DataType.STRING, comment: 'text' })
    // text: string;
  
    // @ForeignKey(() => Contacts)
    // @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false, comment: 'user Id' })
    // userId: number;
  
    // @BelongsTo(() => Contacts)
    // user: Contacts;

  }
