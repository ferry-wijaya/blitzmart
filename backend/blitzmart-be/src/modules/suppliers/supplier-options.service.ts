import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierOptions } from '../../blitzmart-graphql/entities/supplier-options.entity';

@Injectable()
export class SupplierOptionsService {
    constructor(@InjectRepository(SupplierOptions) private supplierOptionsRepository: Repository<SupplierOptions>) {}
}
