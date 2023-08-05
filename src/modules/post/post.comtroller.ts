import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async posts() {
    return this.prisma.post.findMany();
  }

  @Get(':id')
  async post(@Param('id') id: string) {
    return this.prisma.post.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  @Post()
  @ApiBody({ description: 'description', type: CreatePostDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PostDto,
  })
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto });
  }
}
