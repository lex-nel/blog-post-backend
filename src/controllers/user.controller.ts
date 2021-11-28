import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';

// Services
import { PrismaService } from '../services/prisma.service';

@Controller()
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  // User requests
  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.prismaService.user.findMany();
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string): Promise<UserModel> {
    return this.prismaService.user.findUnique({ where: { id: Number(id) } });
  }

  @Post('users')
  async createUser(
    @Body()
    userData: UserModel,
  ): Promise<UserModel> {
    return this.prismaService.user.create({ data: userData });
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    userData: {
      firstName?: string;
      lastName?: string;
    },
  ): Promise<UserModel> {
    return this.prismaService.user.update({
      where: { id: Number(id) },
      data: { ...userData },
    });
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.prismaService.user.delete({ where: { id: Number(id) } });
  }
}
