import { Module } from '@nestjs/common';
import { BlitzmartRestapiService } from './blitzmart-restapi.service';
import { BlitzmartRestapiController } from './blitzmart-restapi.controller';

@Module({
  controllers: [BlitzmartRestapiController],
  providers: [BlitzmartRestapiService],
})
export class BlitzmartRestapiModule {}
