import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private readonly products: Repository<Products>,
  ) {}

  async addProduct(createProductDto: CreateProductDto) {
    return this.products.save(createProductDto).then((response) => {});
  }

  async find(Query: object) {
    if (Object.keys(Query).length === 0) {
      const response = await this.products.find();
      return response;
    }
    return this.products.find({
      where: Query,
    });
  }

  async create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
