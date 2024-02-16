import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlitzmartGraphqlService } from './blitzmart-graphql.service';
import { BlitzmartGraphql } from './entities/blitzmart-graphql.entity';
import { CreateBlitzmartGraphqlInput } from './dto/create-blitzmart-graphql.input';
import { UpdateBlitzmartGraphqlInput } from './dto/update-blitzmart-graphql.input';

@Resolver(() => BlitzmartGraphql)
export class BlitzmartGraphqlResolver {
  constructor(private readonly blitzmartGraphqlService: BlitzmartGraphqlService) {}

  @Mutation(() => BlitzmartGraphql)
  createBlitzmartGraphql(@Args('createBlitzmartGraphqlInput') createBlitzmartGraphqlInput: CreateBlitzmartGraphqlInput) {
    return this.blitzmartGraphqlService.create(createBlitzmartGraphqlInput);
  }

  @Query(() => [BlitzmartGraphql], { name: 'blitzmartGraphql' })
  findAll() {
    return this.blitzmartGraphqlService.findAll();
  }

  @Query(() => BlitzmartGraphql, { name: 'blitzmartGraphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.blitzmartGraphqlService.findOne(id);
  }

  @Mutation(() => BlitzmartGraphql)
  updateBlitzmartGraphql(@Args('updateBlitzmartGraphqlInput') updateBlitzmartGraphqlInput: UpdateBlitzmartGraphqlInput) {
    return this.blitzmartGraphqlService.update(updateBlitzmartGraphqlInput.id, updateBlitzmartGraphqlInput);
  }

  @Mutation(() => BlitzmartGraphql)
  removeBlitzmartGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.blitzmartGraphqlService.remove(id);
  }
}
