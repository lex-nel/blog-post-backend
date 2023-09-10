import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({
    type: [UserDto],
  })
  async users() {
    return this.prisma.user.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({
    type: UserDto,
  })
  async user(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  @UseGuards(JwtAuthGuard)
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
