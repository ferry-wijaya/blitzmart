import { CreateBlitzmartGraphqlInput } from './create-blitzmart-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBlitzmartGraphqlInput extends PartialType(CreateBlitzmartGraphqlInput) {
  @Field(() => Int)
  id: number;
}
