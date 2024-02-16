import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) {}

    public async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }
    public async findById(id: string): Promise<Customer | null> {
        return await this.customerRepository.findOne({
            where: { id }
        });
    }
    public async create(customer: CreateCustomerDto): Promise<Customer> {
        return await this.customerRepository.save(customer);
    }
    public async update(id: string, newValue: CreateCustomerDto): Promise<Customer | null> {
        const customer = await this.customerRepository.findOneOrFail({
            where: { id }
        });
        if(!customer.id) {
            throw new NotFoundException('Customer Not Found');            
        }
        await this.customerRepository.update(id, newValue);
        return await this.customerRepository.findOne({ 
            where: { id }
        });
    }
    public async delete(id: string): Promise<DeleteResult> {
        return await this.customerRepository.delete(id);
    }
}
