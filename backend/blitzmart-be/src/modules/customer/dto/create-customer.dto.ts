import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@InputType()
export class CreateCustomerDto {
    // @ApiProperty()
    @Field()
    name: string;

    // @ApiProperty()
    @Field()
    phone: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    address?: string;

    // @ApiPropertyOptional()
    @Field({nullable: true})
    contact?: string;
}