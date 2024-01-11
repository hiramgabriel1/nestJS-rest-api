/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './entitys/task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'a simple task',
      status: taskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
        id: v4(),
        title,
        description,
        status: taskStatus.PENDING,
    }
    this.tasks.push(task)

    return task;
  }
  updateTask() {}
  editTask() {}
}
