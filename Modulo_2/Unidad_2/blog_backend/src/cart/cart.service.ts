import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Cart } from './cart.entity';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';
import { OrdenEntity } from '../orden/orden.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(OrdenEntity)
    private readonly ordenRepo: Repository<OrdenEntity>,
  ) {}

  async getCartByUser(usuarioId: string): Promise<Cart | undefined> {
    const cart = await this.cartRepo.findOne({ where: { usuario: { id: usuarioId } } });
    return cart === null ? undefined : cart;
  }

  async addToCart(usuarioId: string, productoId: string, cantidad: number, precioUnitario: number): Promise<Cart> {
    let cart = await this.getCartByUser(usuarioId);
    const usuario = await this.userRepo.findOne({ where: { id: usuarioId } });
    if (!usuario) throw new Error('Usuario no encontrado');
    if (!cart) {
      cart = this.cartRepo.create({
        usuario: usuario,
        productos: [],
        items: [],
      });
    }
    let productos = cart.productos || [];
    let items = cart.items || [];
    const product = await this.productRepo.findOne({ where: { id: productoId } });
    if (product && !productos.find(p => p.id === productoId)) {
      productos.push(product);
    }
    const item = items.find(i => i.productoId === productoId);
    if (item) {
      item.cantidad += cantidad;
    } else {
      items.push({ productoId, cantidad, precioUnitario });
    }
    cart.productos = productos;
    cart.items = items;
    return this.cartRepo.save(cart);
  }

  async removeFromCart(usuarioId: string, productoId: string): Promise<Cart | undefined> {
    const cart = await this.getCartByUser(usuarioId);
    if (!cart) return undefined;
    cart.productos = cart.productos.filter(p => p.id !== productoId);
    cart.items = cart.items.filter(i => i.productoId !== productoId);
    return this.cartRepo.save(cart);
  }

  async clearCart(usuarioId: string): Promise<Cart | undefined> {
    const cart = await this.getCartByUser(usuarioId);
    if (!cart) return undefined;
    cart.productos = [];
    cart.items = [];
    return this.cartRepo.save(cart);
  }

  async linkCartToOrder(usuarioId: string, ordenId: string): Promise<Cart | undefined> {
    const cart = await this.getCartByUser(usuarioId);
    const orden = await this.ordenRepo.findOne({ where: { id: ordenId } });
    if (!cart || !orden) return undefined;
    cart.orden = orden;
    return this.cartRepo.save(cart);
  }
}
