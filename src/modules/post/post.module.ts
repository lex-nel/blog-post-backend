import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PostResolver } from './post.resolver';
import { PostsController } from './post.comtroller';

@Module({
  controllers: [PostsController],
  providers: [PostResolver, PrismaService],
  exports: [PostResolver],
})
export class PostModule {}
