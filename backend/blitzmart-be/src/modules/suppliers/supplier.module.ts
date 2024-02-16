import { Module } from '@nestjs/common';
import { SupplierResolver } from './supplier.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOptionsResolver } from '../../blitzmart-graphql/resolvers/supplier-options.resolver';
import { SupplierOptionsService } from './supplier-options.service';
import { Supplier } from '../../blitzmart-graphql/entities/supplier.entity';
import { SupplierOptions } from '../../blitzmart-graphql/entities/supplier-options.entity';
import { SupplierService } from './supplier.service';

@Module({
    imports: [TypeOrmModule.forFeature([Supplier, SupplierOptions])],
    providers: [
        SupplierResolver, SupplierService, 
        SupplierOptionsResolver, SupplierOptionsService],    
})
export class SupplierModule {}
