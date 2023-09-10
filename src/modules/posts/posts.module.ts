import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsResolver, PrismaService, PostsService],
  exports: [PostsResolver],
})
export class PostModule {}
