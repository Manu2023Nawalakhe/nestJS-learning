import { Injectable } from '@nestjs/common';
import { CustomerDto } from './interfaces/customer.interface.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: CustomerDto[] = [];

  getAllCustomers(): CustomerDto[] {
    return this.customers;
  }
  addCustomer(customer: CreateCustomerDto): CustomerDto {
    const newCustomer: CustomerDto = {
      id: Date.now(),
      ...customer,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
