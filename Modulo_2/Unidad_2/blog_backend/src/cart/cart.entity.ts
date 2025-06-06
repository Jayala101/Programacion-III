import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';
import { OrdenEntity } from '../orden/orden.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  usuario: User;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  productos: Product[];

  @Column('jsonb')
  items: {
    productoId: string;
    cantidad: number;
    precioUnitario: number;
  }[];

  @ManyToOne(() => OrdenEntity, { nullable: true, eager: true })
  orden?: OrdenEntity;
}
