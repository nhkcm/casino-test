import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer/consumer.service';
import { TaskListService } from 'src/Services/taskList.service';

@Module({
  providers: [ConsumerService, TaskListService],
  exports: [ConsumerService],
})
export class KafkaModule {}
