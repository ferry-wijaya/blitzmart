import { Module } from '@nestjs/common';
import { BlitzmartGraphqlService } from './blitzmart-graphql.service';
import { BlitzmartGraphqlResolver } from './blitzmart-graphql.resolver';
import { SupplierResolver } from './resolvers/supplier.resolver';
import { SupplierOptionsResolver } from './resolvers/supplier-options.resolver';
import { SupplierModule } from './supplier.module';
import { SupplierOptionsModule } from './supplier-options.module';
import { SupplierOptionsService } from './supplier-options.service';
import { SupplierService } from './supplier.service';

@Module({
  providers: [
    BlitzmartGraphqlResolver, 
    BlitzmartGraphqlService, SupplierOptionsResolver, SupplierOptionsService, SupplierService, 
    // SupplierResolver
  ],
  imports: [SupplierModule, SupplierOptionsModule],
})
export class BlitzmartGraphqlModule {}
