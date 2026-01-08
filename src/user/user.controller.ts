import { Controller, Get } from '@nestjs/common';

@Controller('user') //Decorater
export class UserController {
  @Get()
  getUser() {
    return `user data fetched successfully!`;
  }
}
