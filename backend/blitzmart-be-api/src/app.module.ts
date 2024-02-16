import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlitzmartGraphqlModule } from './blitzmart-graphql/blitzmart-graphql.module';

@Module({
  imports: [BlitzmartGraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
