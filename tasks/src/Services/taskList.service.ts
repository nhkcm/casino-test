import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class TaskListService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createTaskList(userId: number, username: string) {
    await this.knex('task_list')
      .insert({
        name: `task-list-${username}`,
        user_id: userId,
      })
      .returning('*');
  }
}
