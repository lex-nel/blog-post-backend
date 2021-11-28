import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Comment as CommentModel } from '@prisma/client';

// Services
import { PrismaService } from '../services/prisma.service';

@Controller()
export class CommentController {
  constructor(private readonly prismaService: PrismaService) {}

  // Comment requests
  @Get('comments')
  async getComments(): Promise<CommentModel[]> {
    return this.prismaService.comment.findMany();
  }

  @Get('comments/:id')
  async getComment(@Param('id') id: string): Promise<CommentModel> {
    return this.prismaService.comment.findUnique({ where: { id: Number(id) } });
  }

  @Post('comments')
  async createComment(
    @Body()
    commentData: {
      content: string;
      authorId: number;
    },
  ): Promise<CommentModel> {
    return this.prismaService.comment.create({
      data: { ...commentData },
    });
  }

  @Put('comments/:id')
  async updateComment(
    @Param('id') id: string,
    @Body()
    commentData: {
      content?: string;
    },
  ): Promise<CommentModel> {
    return this.prismaService.comment.update({
      where: { id: Number(id) },
      data: { ...commentData },
    });
  }

  @Delete('comments/:id')
  async deleteComment(@Param('id') id: string): Promise<void> {
    this.prismaService.comment.delete({ where: { id: Number(id) } });
  }
}
