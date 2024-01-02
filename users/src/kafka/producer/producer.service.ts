import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationBootstrap {
  private readonly kafka = new Kafka({
    clientId: 'user-app',
    brokers: ['kafka-1:29092', 'kafka-2:39092'],
  });

  private readonly producer: Producer = this.kafka.producer();

  async onModuleInit(): Promise<void> {
    try {
      return await this.producer.connect();
    } catch (error) {
      console.log('->', error);
    }
  }

  async send(record: ProducerRecord) {
    await this.producer.connect();
    await this.producer.send(record);
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.producer.disconnect();
  }
}
