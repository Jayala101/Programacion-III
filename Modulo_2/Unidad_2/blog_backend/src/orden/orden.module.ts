import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';
import { OrdenEntity } from './orden.entity';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenEntity, User, Product])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule {}
