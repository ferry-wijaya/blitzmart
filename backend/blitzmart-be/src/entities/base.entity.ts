import { Field, ObjectType } from '@nestjs/graphql';
import { IEntity } from 'src/commons/ientity.interface';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export abstract class BaseEntity implements IEntity {

    @PrimaryGeneratedColumn()
    @Field()
    public id: string;

    @Column({type: 'citext'})
    @Field()
    public title: string;

    @Column({type: 'citext', nullable: true})
    @Field()
    public description?: string;

    @Column('int', {nullable: true})
    @Field()
    public order: number;

    @CreateDateColumn()
    @Field()
    public createdAt: string;

    @UpdateDateColumn()
    @Field()
    public updatedAt: string;

    @DeleteDateColumn()
    @Field()
    public deletedAt: string;
}
