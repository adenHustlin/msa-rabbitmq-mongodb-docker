import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  await app.listen(3000);
  // console.log(ConfigService.get<string>('MONGODB_URI'));
}
bootstrap();
