import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class MigrationService implements OnModuleInit {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async onModuleInit(): Promise<void> {
    await this.do();
  }

  async do() {
    if (!(await this.knex.schema.hasTable('users'))) {
      await this.knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username');
        table.string('password');
      });
    }

    await this.knex
      .table('users')
      .insert({ username: 'test-user', password: 'secret123' });
  }
}
