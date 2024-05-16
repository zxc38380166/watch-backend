import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Like, Repository } from 'typeorm';
import { getRandomString } from 'src/common/common';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly order: Repository<Order>,
  ) {}
  addOrder(createOrderDto: Order) {
    const order = new Order();
    order.form = JSON.stringify(createOrderDto.form);
    order.products = JSON.stringify(createOrderDto.products);
    order.orderNumber = getRandomString(20);
    order.subTotal = createOrderDto.subTotal;
    order.total = createOrderDto.total;
    return this.order.save(order).then((res) => {
      createOrderDto.orderNumber = order.orderNumber;
      return createOrderDto;
    });
  }

  getOrderAll() {
    return `This action returns all order`;
  }

  getOrder(orderNumber: string) {
    return this.order
      .find({
        where: {
          orderNumber: Like(`%${orderNumber || ''}%`),
        },
      })
      .then((res) => {
        const order = res[0];
        order.products = JSON.parse(res[0].products);
        order.form = JSON.parse(res[0].form);
        return order;
      });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
