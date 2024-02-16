import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierOptions } from './entities/supplier-options.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierOptionsService {
    constructor(@InjectRepository(SupplierOptions) private supplierOptionsRepository: Repository<SupplierOptions>) {}
}
