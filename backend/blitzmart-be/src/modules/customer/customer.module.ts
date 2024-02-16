import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerResolver, CustomerService],
  // exports: [CustomerService, CustomerResolver]
})
export class CustomerModule {}
