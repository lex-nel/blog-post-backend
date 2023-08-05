import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async users() {
    return this.prisma.user.findMany();
  }

  @Get(':id')
  async user(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  @Post()
  @ApiBody({ description: 'description', type: CreateUserDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto,
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }
}
