import { Column, PrimaryGeneratedColumn, Entity } from "typeorm"

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({ type: 'varchar', length: 55, default: ''})
  category: string

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'varchar', length: 255, default: '' })
  description: string

  @Column({ type: 'text' })
  imageUrl: string

  @Column({ type: 'int', default: 0 })
  isEnabled: number

  @Column({ type: 'int', default: 0 })
  num: number

  @Column({ type: 'int', default: 0 })
  originPrice: number

  @Column({ type: 'int', default: 0 })
  price: number

  @Column({ type: 'varchar', length: 55, default: '' })
  title: string
}
