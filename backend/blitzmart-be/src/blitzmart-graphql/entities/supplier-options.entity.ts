import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity({name: 'supplier-options'})
@ObjectType()
export class SupplierOptions {
    @PrimaryColumn()
    @Field((type) => Int)
    supplierId: number;

    @Column({default: false})
    @Field({defaultValue: false})
    consignment: boolean;

    @Column({default: false})
    @Field({defaultValue: false})
    taxable: boolean;

}
