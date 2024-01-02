import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class MigrationService implements OnModuleInit {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async onModuleInit(): Promise<void> {
    await this.do();
  }

  async do() {
    // run task-list table migration
    if (!(await this.knex.schema.hasTable('task_list'))) {
      await this.knex.schema.createTable('task_list', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('user_id');
      });
    }

    await this.knex
      .table('task_list')
      .insert({ name: 'test-user-list', user_id: 1 });

    // run task table migration
    if (!(await this.knex.schema.hasTable('task'))) {
      await this.knex.schema.createTable('task', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.date('start_date');
        table.integer('task_list_id');
      });
    }

    await this.knex.table('task').insert({
      name: 'test-user-task-1',
      start_date: Date.now(),
      task_list_id: 1,
    });
  }
}
