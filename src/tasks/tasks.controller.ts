/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks/data')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): any {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: any){
    console.log(newTask);
    
    return { response: 'guardando' };
    // this.taskService.createTask();
  }
}
