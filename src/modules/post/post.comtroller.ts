import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [PostDto],
  })
  async posts() {
    return this.prisma.post.findMany();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: PostDto,
  })
  async post(@Param('id') id: string) {
    return this.prisma.post.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiBody({ description: 'description', type: CreatePostDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PostDto,
  })
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto });
  }
}
