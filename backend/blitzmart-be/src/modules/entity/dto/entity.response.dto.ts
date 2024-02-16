import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IEntity } from 'src/commons/ientity.interface';

export class EntityResponseDto implements IEntity {
    // @ApiProperty()
    @Field()
    public readonly id: string;

    // @ApiProperty()
    @Field({nullable: true})
    public readonly title?: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    public readonly description?: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    public readonly order?: number;

    // @ApiProperty()
    @Field({nullable: true})
    public readonly createdAt?: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    public readonly updatedAt?: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    public readonly deletedAt?: string;
}