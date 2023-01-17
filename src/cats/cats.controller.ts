import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor (private readonly catsService : CatsService){}
  
  @Get()
  getAllCat(){
    return 'all cat'
  }
  
  @Get(':id')
  getOneCat(){
    return 'One cat'
  }
  
  @Post()
  createCat() {
    return 'create cat'
  }

  @Put(':id')
  updateCat() {
    return 'update cat'
  }
  
  @Patch(':id')
  updatePartialCat() {
    return 
  }

  @Delete()
  deleteCat(){
    return 'delete Cat'
  }
}
