import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostResolver, PrismaService],
  exports: [PostResolver],
  controllers: [],
})
export class PostModule {}
