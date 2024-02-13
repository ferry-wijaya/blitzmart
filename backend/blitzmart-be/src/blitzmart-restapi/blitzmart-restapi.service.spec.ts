import { Test, TestingModule } from '@nestjs/testing';
import { BlitzmartRestapiService } from './blitzmart-restapi.service';

describe('BlitzmartRestapiService', () => {
  let service: BlitzmartRestapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlitzmartRestapiService],
    }).compile();

    service = module.get<BlitzmartRestapiService>(BlitzmartRestapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
