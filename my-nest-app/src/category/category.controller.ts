import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryservie: CategoryService) {}
  @Get()
  getAllCategories() {
    return this.categoryservie.getCategories();
  }
}
