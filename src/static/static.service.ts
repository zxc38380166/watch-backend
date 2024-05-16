import { Injectable } from '@nestjs/common';
import { CreateStaticDto } from './dto/create-static.dto';
import { UpdateStaticDto } from './dto/update-static.dto';

@Injectable()
export class StaticService {
  upload(createUploadDto: CreateStaticDto) {
    return 'This action adds a new upload';
  }
}
