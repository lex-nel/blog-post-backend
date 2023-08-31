import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.service';
import { PostLikeDto } from './dto/post-like.dto';
import { CommentLikeDto } from './dto/comment-like.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Likes')
@Controller('likes')
export class LikeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [PostLikeDto],
  })
  async postLikes() {
    return this.prisma.postLikes.findMany({
      include: {
        author: true,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('post/:id')
  async createPostLike(@Param('id') id: string, @Request() req) {
    return this.prisma.postLikes.create({
      data: {
        postId: parseInt(id),
        authorId: req.user.userId,
      },
    });
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [CommentLikeDto],
  })
  async commentLikes() {
    return this.prisma.commentLikes.findMany({
      include: {
        author: true,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('comment/:id')
  async createCommentLike(@Param('id') id: string, @Request() req) {
    return this.prisma.commentLikes.create({
      data: {
        commentId: parseInt(id),
        authorId: req.user.userId,
      },
    });
  }
}
