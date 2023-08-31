import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PostDto } from '../post/dto/post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentDto } from './dto/comment.dto';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [CommentDto],
  })
  async posts() {
    return this.prisma.comment.findMany({
      include: {
        _count: { select: { likes: true } },
        author: true,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiBody({ description: 'description', type: CreateCommentDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PostDto,
  })
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
    @Request() req,
  ) {
    return this.prisma.comment.create({
      data: {
        ...createCommentDto,
        authorId: req.user.userId,
      },
    });
  }
}
