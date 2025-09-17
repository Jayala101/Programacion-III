import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';

@Entity('ordenes')
export class OrdenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  usuario: User;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  productos: Product[];

  @Column('jsonb')
  productosDetalle: {
    productoId: string;
    cantidad: number;
    precioUnitario: number;
  }[];

  @Column('decimal')
  total: number;

  @CreateDateColumn()
  fecha: Date;
}
