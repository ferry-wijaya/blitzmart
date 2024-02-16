import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ICustomer } from 'src/modules/customer/interfaces/customer.interface';
import { Field, Int, ObjectType } from '@nestjs/graphql';


/**
 * Entity 'User'.
 */
@Entity({name: 'customer'})
@ObjectType()
export class Customer implements ICustomer {
    /**
     * Identifier.
     */
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => Int)
    id: string;

    @Column({type: 'varchar', length: 50})
    @Field()
    name: string;

    @Column({type: 'varchar', length: 30, unique: true })
    @Field()
    phone: string;

    @Column({ type: 'varchar', length: 250, nullable: true})
    @Field({ nullable: true })
    address?: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    @Field({ nullable: true })
    contact?: string;

    // @BeforeInsert()
    // async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 10);
    // }

    // async comparePassword(attempt: string): Promise<boolean> {
    //     return await bcrypt.compare(attempt, this.password);
    // }
}