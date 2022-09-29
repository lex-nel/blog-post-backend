import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CommentResolver } from './comment.resolver';

@Module({
  providers: [CommentResolver, PrismaService],
  exports: [],
  controllers: [],
})
export class CommentModule {}
