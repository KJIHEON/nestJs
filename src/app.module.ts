import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import {LoggerMiddleware} from 'comm'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [CatsModule, UsersModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
