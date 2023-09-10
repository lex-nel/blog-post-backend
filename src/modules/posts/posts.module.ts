import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PrismaService, PostsService],
})
export class PostModule {}
