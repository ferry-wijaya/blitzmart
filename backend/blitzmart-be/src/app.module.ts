import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlitzmartGraphqlModule } from './blitzmart-graphql/blitzmart-graphql.module';
import { BlitzmartRestapiModule } from './blitzmart-restapi/blitzmart-restapi.module';

@Module({
  imports: [BlitzmartGraphqlModule, BlitzmartRestapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
