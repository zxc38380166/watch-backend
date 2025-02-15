import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv/config'; // 这行是关键代码
import { staticPath } from './static/path/path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.enableCors();
  app.useStaticAssets(join(__dirname, staticPath.assets), {
    prefix: staticPath.assets,
  });
  await app.listen(process.env.PORT || 3000);
  console.log(`Your local URL is http://localhost:${process.env.PORT || 3000}`);
}

bootstrap();
