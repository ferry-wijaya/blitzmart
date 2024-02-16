import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from './customer.service';

@Resolver(()=>Customer)
export class CustomerResolver {
    constructor(private customerService: CustomerService) {}
    
    @Query(() => [Customer])
    getSuppliers() {
        return this.customerService.findAll();
    }

    @Query(returns => Customer, {nullable: true}) 
    getSupplierById(@Args('id') id: string) {
        return this.customerService.findById(id);
    }
}