import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import {  } from '@nestjs/common/decorators';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  addOrder(@Body() createOrderDto: Order) {
    return this.orderService.addOrder(createOrderDto);
  }

  @Get()
  getOrderAll() {
    return this.orderService.getOrderAll();
  }

  @Get(':id')
  getOrder(@Param('id') orderNumber: string) {
    return this.orderService.getOrder(orderNumber);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
