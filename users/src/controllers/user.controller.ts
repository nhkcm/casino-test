import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { UserService } from '../Services/user.service';
import { CreateUserRequest } from '../models/requests/CreateUserRequest';
import { LogInRequest } from '../models/requests/LogInRequest';

@Controller('users')
export class UserController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello() {
    return this.userService.getHello();
  }

  @Post('create-user')
  async createUser(@Body() request: CreateUserRequest) {
    return await this.userService.createUser(request);
  }

  @Post('authenticate')
  async authenticate(@Body() request: LogInRequest) {
    return await this.userService.signIn(request.username, request.password);
  }
}
