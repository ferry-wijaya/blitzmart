import { Module } from '@nestjs/common';
import { SupplierResolver } from './resolvers/supplier.resolver';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { SupplierOptions } from './entities/supplier-options.entity';
import { SupplierOptionsResolver } from './resolvers/supplier-options.resolver';
import { SupplierOptionsService } from './supplier-options.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Supplier, SupplierOptions])
    ],
    providers: [SupplierResolver, SupplierService, SupplierOptionsResolver, SupplierOptionsService]    
})
export class SupplierModule {}
