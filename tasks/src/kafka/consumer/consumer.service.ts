import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';
import { TaskListService } from 'src/Services/taskList.service';
import { User } from 'src/models/user';

@Injectable()
export class ConsumerService implements OnApplicationShutdown, OnModuleInit {
  constructor(private readonly taskListService: TaskListService) {}

  private readonly kafka = new Kafka({
    clientId: 'user-app',
    brokers: ['localhost:39092', 'localhost:29092'],
  });

  private readonly consumer: Consumer = this.kafka.consumer({
    groupId: 'nestjs-kafka',
  });
  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: 'user-events',
      fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const user: User = JSON.parse(message.value.toString());
        this.taskListService.createTaskList(user.sub, user.username);
        console.log(user);
      },
    });
  }

  async onApplicationShutdown() {
    this.consumer.disconnect();
  }
}
