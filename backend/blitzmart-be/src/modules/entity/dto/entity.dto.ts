import { Field } from '@nestjs/graphql';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsNumber } from 'class-validator';
import { IEntity } from 'src/commons/ientity.interface';

export class EntityDto implements IEntity {
    // @ApiPropertyOptional()
    @IsUUID()
    @IsOptional()
    @Field()
    public readonly id: string;

    // @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @Field()
    public readonly title: string;

    // @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @Field()
    public readonly description: string;

    // @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    @Field()
    public readonly order: number;
}