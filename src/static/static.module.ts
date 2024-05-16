import { Module } from '@nestjs/common';
import { StaticService } from './static.service';
import { StaticController } from './static.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { staticPath } from './path/path';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, `..${staticPath.assets}`),
      filename(req, file, callback) {
        return callback(null, file.originalname);
      },
    })
  })],
  controllers: [StaticController],
  providers: [StaticService]
})
export class StaticModule {}
