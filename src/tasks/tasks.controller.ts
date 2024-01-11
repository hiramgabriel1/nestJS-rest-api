/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/task.dto";

@Controller("tasks/data")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): any {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    console.log(newTask);

    return this.taskService.createTask(newTask.title, newTask.description); 

    // return { response: 'guardando' };
  }
}
