import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { KnexModule } from 'nestjs-knex';
import { AppService } from './Services/app.service';
import { UserService } from './Services/user.service';
import { MigrationService } from './Migrations/migration.service';
import { KafkaModule } from './kafka/kafka.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/auth';

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
  controllers: [UserController],
  providers: [AppService, UserService, MigrationService],
})
export class AppModule {}
