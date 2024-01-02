import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ProducerService } from 'src/kafka/producer/producer.service';
import { CreateUserRequest } from 'src/models/requests/CreateUserRequest';
import { User } from 'src/models/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private readonly producerService: ProducerService,
    private jwtService: JwtService,
  ) {}

  async getHello() {
    const users = await this.knex.table('users');
    return { users };
  }

  async createUser(request: CreateUserRequest) {
    const users = await this.knex('users').insert(request);
    this.producerService.send({
      topic: 'user-events',
      messages: [
        {
          value: JSON.stringify(request),
        },
      ],
    });
    return { users };
  }

  async signIn(usr, pass) {
    const user: User = await this.knex('users').where('username', usr).first();

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
