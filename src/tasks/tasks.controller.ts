import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getAlltasks(): Task[] {
    return this.taskservice.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskservice.getTaskById(id);
  }

  @Delete('/:id')
  delTaskById(@Param('id') id: string): void {
    return this.taskservice.delTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskservice.updateTaskStatus(id, status);
  }

  @Post()
  CreateTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.taskservice.CreateTask(title, description);
  }
}
