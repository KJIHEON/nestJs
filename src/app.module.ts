import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import {LoggerMiddleware} from './common/logger.middleware'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import * as mongoose from 'mongoose';


@Module({ 
  imports: [
    ConfigModule.forRoot(),
    CatsModule, 
    UsersModule,
    MongooseModule.forRoot(process.env.MONGOURI,{
      useCreateIndex: true,
    })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule implements NestModule{
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer  ) {
     consumer.apply(LoggerMiddleware).forRoutes('*')
     mongoose.set('debug', this.isDev);
  }
}
