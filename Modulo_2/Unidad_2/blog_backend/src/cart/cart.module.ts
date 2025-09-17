import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';
import { OrdenEntity } from '../orden/orden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, User, Product, OrdenEntity])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
