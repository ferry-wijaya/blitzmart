import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  // .setTitle('blitzmart example')
  // .setDescription('The blitzmart API description')
  // .setVersion('1.0')
  // .addTag('blitzmart')
  // .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
