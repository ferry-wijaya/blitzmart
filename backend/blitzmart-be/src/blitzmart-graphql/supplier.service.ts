import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { CreateSupplierInput } from './dto/create-supplier.input';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier) private suppliersRepository: Repository<Supplier>){}
    
    getSuppliers() {
        return this.suppliersRepository.find({relations: ['options']});
    }

    createSupplier(createSupplierData: CreateSupplierInput) {
        const newSupplier = this.suppliersRepository.create(createSupplierData);
        console.log(newSupplier);
        return this.suppliersRepository.save(newSupplier);
    }       
}
