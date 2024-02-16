import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Options {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    description?: string;
}
