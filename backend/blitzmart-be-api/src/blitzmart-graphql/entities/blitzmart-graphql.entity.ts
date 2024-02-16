import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BlitzmartGraphql {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
