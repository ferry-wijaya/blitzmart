import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierInput } from '../../blitzmart-graphql/dto/create-supplier.input';
import { Supplier } from '../../blitzmart-graphql/entities/supplier.entity';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier) private suppliersRepository: Repository<Supplier>,
    ){}
    
    getSuppliers() {
        return this.suppliersRepository.find({relations: ['options']});
    }

    getSupplierById(id: number) {
        return this.suppliersRepository.findOne({
            where: { id },
            relations: ['options']});
    }

    createSupplier(createSupplierData: CreateSupplierInput) {
        const newSupplier = this.suppliersRepository.create(createSupplierData);
        return this.suppliersRepository.save(newSupplier);
    }    
}
