import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SupplierOptions } from '../entities/supplier-options.entity';
import { CreateSupplierOptionsInput } from '../dto/create-supplier-options.input';
import { mockSupplierOptions } from 'src/__mocks__/supplier-options.mocks';

@Resolver()
export class SupplierOptionsResolver {
    @Mutation(() => SupplierOptions) 
    createSupplierOptions(
        @Args('createSupplierOptionsData') createSupplierOptionsData: CreateSupplierOptionsInput
    ) {
        console.log(createSupplierOptionsData);
        mockSupplierOptions.push(createSupplierOptionsData);
        return createSupplierOptionsData;
    }
}
