import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Supplier } from '../entities/supplier.entity';
import { mockSuppliers } from 'src/__mocks__/suppliers.mocks';
import { SupplierOptions } from '../entities/supplier-options.entity';
import { mockSupplierOptions } from 'src/__mocks__/supplier-options.mocks';
import { CreateSupplierInput } from '../dto/create-supplier.input';
import { SupplierService } from '../supplier.service';
import { Inject } from '@nestjs/common';

export let incrementId = 2;

@Resolver((of) => Supplier)
export class SupplierResolver {
    constructor(private supplierService: SupplierService) {}

    @Query(() => [Supplier])
    getSuppliers() {
        //return mockSuppliers;
        return this.supplierService.getSuppliers();
    }

    @ResolveField(returns => SupplierOptions, {name: 'options', nullable: true})
    getSupplierOptions(@Parent() supplier: Supplier) {
        console.log(supplier);
        return mockSupplierOptions.find(opt => opt.supplierId === supplier.id);
    }
    
    @Mutation(()=>Supplier) 
    createSupplier(
        @Args('name') supplierName: string,
    ) {
        // const newSupplier = { name: supplierName , id: ++incrementId};
        // mockSuppliers.push(newSupplier);
        // return newSupplier;
    }

    @Mutation((returns)=> Supplier) 
    createSupplierInput(
        @Args('createSupplierData') createSupplierData: CreateSupplierInput
    ) {
        // const { supplierName } = createSupplierData;
        // const newSupplier = {name: supplierName, id: ++incrementId};
        // mockSuppliers.push(newSupplier);
        // return newSupplier;
        return this.supplierService.createSupplier(createSupplierData);
    }
}
