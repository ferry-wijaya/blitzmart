import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { mockSuppliers } from 'src/db/__mocks__/suppliers.mocks';
import { mockSupplierOptions } from 'src/db/__mocks__/supplier-options.mocks';
import { CreateSupplierInput } from '../../blitzmart-graphql/dto/create-supplier.input';
import { Inject } from '@nestjs/common';
import { Supplier } from '../../blitzmart-graphql/entities/supplier.entity';
import { SupplierService } from './supplier.service';

export let incrementId = 2;

@Resolver((of) => Supplier)
export class SupplierResolver {
    constructor(private supplierService: SupplierService) {}

    @Query((returns) => Supplier, {nullable: true})
    getSupplierById(@Args('id', { type: () => Int }) id: number) {
        //return mockSuppliers;
        return this.supplierService.getSupplierById(id);
    }

    @Query(() => [Supplier])
    getSuppliers() {
        //return mockSuppliers;
        return this.supplierService.getSuppliers();
    }


    // @ResolveField(returns => SupplierOptions, {name: 'options', nullable: true})
    // getSupplierOptions(@Parent() supplier: Supplier) {
    //     console.log(supplier);
    //     return mockSupplierOptions.find(opt => opt.supplierId === supplier.id);
    // }
    
    // @Mutation(()=>Supplier) 
    // createSupplier(
    //     @Args('name') supplierName: string,
    // ) {
    //     // const newSupplier = { name: supplierName , id: ++incrementId};
    //     // mockSuppliers.push(newSupplier);
    //     // return newSupplier;
    // }

    @Mutation((returns)=> Supplier) 
    createSupplier(
        @Args('createSupplierData') createSupplierData: CreateSupplierInput
    ) {
        return this.supplierService.createSupplier(createSupplierData);
    }
}
