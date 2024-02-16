import { Module } from '@nestjs/common';
import { BlitzmartGraphqlService } from './blitzmart-graphql.service';
import { BlitzmartGraphqlResolver } from './blitzmart-graphql.resolver';

@Module({
  providers: [
    BlitzmartGraphqlResolver, 
    BlitzmartGraphqlService, 
  ],
  imports: [],
})
export class BlitzmartGraphqlModule {}
