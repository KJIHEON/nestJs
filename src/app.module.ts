import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import {LoggerMiddleware} from './common/logger.middleware'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
console.log(process.env.MONGOURI,"여기임여기")

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    CatsModule, 
    UsersModule,
    MongooseModule.forRoot(process.env.MONGOURI)],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule implements NestModule{  
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
