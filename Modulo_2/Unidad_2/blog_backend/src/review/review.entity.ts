import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  usuario: User;

  @Column()
  productoId: string;

  @Column('int')
  calificacion: number;

  @Column()
  comentario: string;

  @CreateDateColumn()
  fecha: Date;
}
