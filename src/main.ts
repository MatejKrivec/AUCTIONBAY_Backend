import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all routes
  app.enableCors({
    origin: 'http://localhost:5173', // Allow requests from this origin
  });

  await app.listen(3000);
}
bootstrap();
