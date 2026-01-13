import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }
  @Put(':id')
  updateStudent(id: number, @Body() body: { name: string; age: number }) {
    return this.studentService.updateStudent(Number(id), body);
  }
  @Patch(':id')
  partialUpdateStudent(
    id: number,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.partialUpdateStudent(Number(id), body);
  }
  @Delete(':id')
  deleteStudent(id: number) {
    return this.studentService.deleteStudent(Number(id));
  }
}
