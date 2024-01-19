import { DATE } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'item_promotions',
  paranoid: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class ItemPromotion extends Model<ItemPromotion> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  promotion_id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  promotion_name: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  product_sku: string;

  @Column({ type: DataType.STRING(20), allowNull: true })
  parent_sku: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  buy_qty: number;

  @Column(DataType.INTEGER)
  free_product_qty: number;

  @Column(DataType.STRING(20))
  free_product_sku: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  is_multiply: boolean;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  start_date: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  end_date: Date;

  @Column({ type: DATE, allowNull: false })
  created_at: Date;

  @Column({ type: DATE, allowNull: false })
  updated_at: Date;

  @Column({ type: DATE })
  deleted_at: Date;
}