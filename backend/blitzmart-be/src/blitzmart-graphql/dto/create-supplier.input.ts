import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSupplierInput {
    @Field()
    supplierName: string;
}