import { Test, TestingModule } from '@nestjs/testing';
import { BlitzmartRestapiController } from './blitzmart-restapi.controller';
import { BlitzmartRestapiService } from './blitzmart-restapi.service';

describe('BlitzmartRestapiController', () => {
  let controller: BlitzmartRestapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlitzmartRestapiController],
      providers: [BlitzmartRestapiService],
    }).compile();

    controller = module.get<BlitzmartRestapiController>(BlitzmartRestapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
