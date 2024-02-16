import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SupplierOptions } from './supplier-options.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'supplier'})
@ObjectType()
export class Supplier {

    @PrimaryGeneratedColumn()
    @Field((type)=>Int)
    id: number;

    @Column()
    @Field()
    name: string;
    
    @OneToOne(()=>SupplierOptions)
    @JoinColumn()
    @Field({nullable: true })
    options?: SupplierOptions;
}
