import { Injectable } from '@nestjs/common';
import { CreateBlitzmartGraphqlInput } from './dto/create-blitzmart-graphql.input';
import { UpdateBlitzmartGraphqlInput } from './dto/update-blitzmart-graphql.input';

@Injectable()
export class BlitzmartGraphqlService {
  create(createBlitzmartGraphqlInput: CreateBlitzmartGraphqlInput) {
    return 'This action adds a new blitzmartGraphql';
  }

  findAll() {
    return `This action returns all blitzmartGraphql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blitzmartGraphql`;
  }

  update(id: number, updateBlitzmartGraphqlInput: UpdateBlitzmartGraphqlInput) {
    return `This action updates a #${id} blitzmartGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} blitzmartGraphql`;
  }
}
