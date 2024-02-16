import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateSupplierOptionsInput {
    @Field(() => Int)
    supplierId: number;

    @Field({nullable: true, defaultValue: false})
    consignment: boolean;

    @Field({nullable: true, defaultValue: false})
    taxable: boolean;
}
