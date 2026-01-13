import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CategoryModule } from './category/category.module';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  controllers: [
    AppController,
    UserController,
    ProductController,
    EmployeeController,
    CustomerController,
  ],
  providers: [AppService, ProductService, EmployeeService, CustomerService],
  imports: [EmployeeModule, StudentModule, CategoryModule, CustomerModule],
})
export class AppModule {}
