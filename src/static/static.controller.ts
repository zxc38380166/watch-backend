import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, Delete } from '@nestjs/common';
import { StaticService } from './static.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('static')
export class StaticController {
  constructor(private readonly uploadService: StaticService) {}
  
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    return file;
  }
}
