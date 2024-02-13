import { Injectable } from '@nestjs/common';
import { CreateBlitzmartRestapiDto } from './dto/create-blitzmart-restapi.dto';
import { UpdateBlitzmartRestapiDto } from './dto/update-blitzmart-restapi.dto';

@Injectable()
export class BlitzmartRestapiService {
  create(createBlitzmartRestapiDto: CreateBlitzmartRestapiDto) {
    return 'This action adds a new blitzmartRestapi';
  }

  findAll() {
    return `This action returns all blitzmartRestapi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blitzmartRestapi`;
  }

  update(id: number, updateBlitzmartRestapiDto: UpdateBlitzmartRestapiDto) {
    return `This action updates a #${id} blitzmartRestapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} blitzmartRestapi`;
  }
}
