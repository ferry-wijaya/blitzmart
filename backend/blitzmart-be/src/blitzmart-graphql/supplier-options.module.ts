import { Module } from '@nestjs/common';
import { SupplierOptionsResolver } from './resolvers/supplier-options.resolver';
import { SupplierOptionsService } from './supplier-options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOptions } from './entities/supplier-options.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([SupplierOptions])
    ],
    providers: [SupplierOptionsResolver, SupplierOptionsService]
})
export class SupplierOptionsModule {}
