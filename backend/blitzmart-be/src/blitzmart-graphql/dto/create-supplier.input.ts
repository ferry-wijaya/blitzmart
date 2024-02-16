import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSupplierInput {
    @Field()
    name: string;
}