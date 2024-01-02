import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { Task } from 'src/models/database/task';
import { TaskList } from 'src/models/database/taskList';
import { CreateTaskRequest } from 'src/models/requests/CreateTaskRequest';
import { UpdateTaskRequest } from 'src/models/requests/UpdateTaskRequest';

@Injectable()
export class TaskService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createTask(createTaskRequest: CreateTaskRequest, userId: number) {
    const taskList: TaskList = await this.knex('task_list')
      .where('user_id', userId)
      .first();

    const tasks = await this.knex('task').insert({
      ...createTaskRequest,
      task_list_id: taskList.id,
    } as Task);

    return { tasks };
  }

  async updateTask(updateTaskRequest: UpdateTaskRequest) {
    await this.knex('task').where('id', updateTaskRequest.task_id).update({
      start_date: updateTaskRequest.start_date,
      name: updateTaskRequest.name,
    });
  }

  async deleteTask(id: number) {
    return await this.knex('task').where('id', id).del();
  }

  async getTasks(userId: number) {
    const tasks = await this.knex('task_list')
      .join('task', function () {
        this.on('task.task_list_id', '=', 'task_list.id');
      })
      .where('task_list.user_id', userId)
      .select('task.id', 'task.name', 'task.start_date');

    return { tasks };
  }
}
