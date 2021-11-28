import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';

// Services
import { PrismaService } from '../services/prisma.service';

@Controller()
export class PostController {
  constructor(private readonly prismaService: PrismaService) {}

  // Post requests
  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.prismaService.post.findMany();
  }

  @Get('posts/:id')
  async getPost(@Param('id') id: string): Promise<PostModel> {
    return this.prismaService.post.findUnique({ where: { id: Number(id) } });
  }

  @Post('posts')
  async createPost(
    @Body()
    postData: {
      title: string;
      content: string;
      authorId: number;
    },
  ): Promise<PostModel> {
    return this.prismaService.post.create({
      data: { ...postData },
    });
  }

  @Put('posts/:id')
  async updatePost(
    @Param('id') id: string,
    @Body()
    postData: {
      title?: string;
      content?: string;
    },
  ): Promise<PostModel> {
    return this.prismaService.post.update({
      where: { id: Number(id) },
      data: { ...postData },
    });
  }

  @Patch('posts/:id')
  async togglePost(
    @Param('id') id: string,
    @Body()
    postData: {
      isPublished: boolean;
    },
  ): Promise<PostModel> {
    const post = await this.prismaService.post.findUnique({
      where: { id: Number(id) },
    });

    return this.prismaService.post.update({
      where: { id: Number(id) },
      data: { ...post, published: postData.isPublished },
    });
  }

  @Delete('posts/:id')
  async deletePost(@Param('id') id: string): Promise<void> {
    this.prismaService.post.delete({ where: { id: Number(id) } });
  }
}
