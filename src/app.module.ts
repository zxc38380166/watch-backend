import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { StaticModule } from './static/static.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //資料庫類型
      // 雲端資料庫
      username: process.env.CLOUD_MYSQL_USERNAME, //帳號
      password: process.env.CLOUD_MYSQL_PASSWORD, //密碼
      host: process.env.CLOUD_MYSQL_HOST, //host
      database: process.env.CLOUD_MYSQL_DATABASE, //庫名
      // 本地資料庫
      // username: 'root', //帳號
      // password: 'zxc880306', //密碼
      // host: 'localhost', //host
      // database: 'clock_store', //庫名

      port: process.env.CLOUD_MYSQL_PORT as any,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], //實體文件, 各別引入
      synchronize: true, //synchronize自段代表是否自動將實體類同步到資料庫
      retryDelay: 10000, //重試連接資料庫間隔時間
      retryAttempts: 10, //重試連接資料庫的次數
      autoLoadEntities: true, //如果為true, 將自動加載實體 forFeature() 方法註冊的每個實體都將自動添加到配置對象的實體數組中
    }),
    ProductsModule,
    OrderModule,
    StaticModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
