import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(dto: Partial<Product>): Promise<Product | null> {
    try {
      const product = this.productRepo.create(dto);
      return await this.productRepo.save(product);
    } catch (err) {
      console.error('Error creating product:', err);
      return null;
    }
  }

  async findAll(options?: IPaginationOptions): Promise<Pagination<Product> | Product[] | null> {
    try {
      if (options) {
        const query = this.productRepo.createQueryBuilder('product');
        return await paginate<Product>(query, options);
      }
      return await this.productRepo.find();
    } catch (err) {
      console.error('Error retrieving products:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Product | null> {
    try {
      return await this.productRepo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding product:', err);
      return null;
    }
  }

  async findByName(nombre: string): Promise<Product | null> {
    try {
      return await this.productRepo.findOne({ where: { nombre } });
    } catch (err) {
      console.error('Error finding product by name:', err);
      return null;
    }
  }

  async update(id: string, dto: Partial<Product>): Promise<Product | null> {
    try {
      const product = await this.findOne(id);
      if (!product) return null;

      Object.assign(product, dto);
      return await this.productRepo.save(product);
    } catch (err) {
      console.error('Error updating product:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Product | null> {
    try {
      const product = await this.findOne(id);
      if (!product) return null;

      await this.productRepo.remove(product);
      return product;
    } catch (err) {
      console.error('Error deleting product:', err);
      return null;
    }
  }
}
