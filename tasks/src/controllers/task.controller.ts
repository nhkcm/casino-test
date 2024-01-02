import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/Auth/AuthGuard';
import { TaskService } from 'src/Services/task.service';
import { CreateTaskRequest } from 'src/models/requests/CreateTaskRequest';
import { UpdateTaskRequest } from 'src/models/requests/UpdateTaskRequest';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getTask(@Request() req: any) {
    const userId = req.user?.sub;
    return this.taskService.getTasks(userId);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createTask(@Request() req: any, @Body() newTask: CreateTaskRequest) {
    const userId = req.user?.sub;
    return this.taskService.createTask(newTask, userId);
  }

  @Put()
  @UseGuards(AuthGuard)
  async updateTask(
    @Request() req: any,
    @Body() newTaskData: UpdateTaskRequest,
  ) {
    return this.taskService.updateTask(newTaskData);
  }

  @Delete(':taskId')
  @UseGuards(AuthGuard)
  async deleteTask(@Param() params: any) {
    return this.taskService.deleteTask(params.taskId);
  }
}
