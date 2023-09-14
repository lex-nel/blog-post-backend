import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { CommentModule } from './modules/comments/comments.module';
import { TagModule } from './modules/tags/tags.module';
import { LikeModule } from './modules/likes/likes.module';

@Module({
  imports: [CommentModule, TagModule, LikeModule],
  controllers: [PostsController],
  providers: [PrismaService, PostsService],
})
export class PostModule {}
