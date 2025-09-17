import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { OrdenEntity } from './orden.entity';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';

export interface OrdenProductoDto {
  productoId: string;
  cantidad: number;
  precioUnitario: number;
}

export interface CrearOrdenDto {
  usuarioId: string;
  productos: OrdenProductoDto[];
}

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(OrdenEntity)
    private readonly ordenRepo: Repository<OrdenEntity>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async crearOrden(dto: CrearOrdenDto): Promise<OrdenEntity | null> {
    const usuario = await this.userRepo.findOne({ where: { id: dto.usuarioId } });
    if (!usuario) return null;

    const productosIds = dto.productos.map(p => p.productoId);
    const productos = await this.productRepo.find({ where: { id: In(productosIds) } });

    const total = dto.productos.reduce(
      (sum, prod) => sum + prod.cantidad * prod.precioUnitario,
      0,
    );

    const orden = this.ordenRepo.create({
      usuario,
      productos,
      productosDetalle: dto.productos,
      total,
    });

    return this.ordenRepo.save(orden);
  }

  async obtenerOrdenesPorUsuario(usuarioId: string): Promise<OrdenEntity[]> {
    return this.ordenRepo.find({ where: { usuario: { id: usuarioId } } });
  }

  async obtenerOrdenPorId(id: string): Promise<OrdenEntity | undefined> {
    const orden = await this.ordenRepo.findOne({ where: { id } });
    return orden === null ? undefined : orden;
  }

  async getAllOrdenes(): Promise<OrdenEntity[]> {
    return this.ordenRepo.find();
  }
}
