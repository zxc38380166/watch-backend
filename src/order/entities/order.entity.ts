import { Column, PrimaryGeneratedColumn, Entity } from "typeorm"

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ type: 'varchar', length: 55, default: ''})
  orderNumber: string

  @Column({ type: 'varchar', length: 55, default: ''})
  subTotal: string

  @Column({ type: 'varchar', length: 55, default: ''})
  total: string
  
  @Column({ type: 'text' })
  products: string

  @Column({ type: 'text' })
  form: string
}
