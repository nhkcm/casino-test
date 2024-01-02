import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { MigrationService } from './migrations/migration.service';
import { TaskService } from './Services/task.service';
import { TaskController } from './controllers/task.controller';
import { TaskListService } from './Services/taskList.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './Auth/auth';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'sqlite3',
          useNullAsDefault: true,
          connection: ':memory:',
        },
      }),
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3000s' },
    }),
    KafkaModule,
  ],
  controllers: [TaskController],
  providers: [AppService, MigrationService, TaskService, TaskListService],
})
export class AppModule {}
