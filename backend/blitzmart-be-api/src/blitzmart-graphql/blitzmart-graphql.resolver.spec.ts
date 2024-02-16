import { Test, TestingModule } from '@nestjs/testing';
import { BlitzmartGraphqlResolver } from './blitzmart-graphql.resolver';
import { BlitzmartGraphqlService } from './blitzmart-graphql.service';

describe('BlitzmartGraphqlResolver', () => {
  let resolver: BlitzmartGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlitzmartGraphqlResolver, BlitzmartGraphqlService],
    }).compile();

    resolver = module.get<BlitzmartGraphqlResolver>(BlitzmartGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
