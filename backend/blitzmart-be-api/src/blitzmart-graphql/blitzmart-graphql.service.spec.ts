import { Test, TestingModule } from '@nestjs/testing';
import { BlitzmartGraphqlService } from './blitzmart-graphql.service';

describe('BlitzmartGraphqlService', () => {
  let service: BlitzmartGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlitzmartGraphqlService],
    }).compile();

    service = module.get<BlitzmartGraphqlService>(BlitzmartGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
