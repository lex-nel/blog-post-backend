import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CommentResolver } from './comment.resolver';
import { CommentsController } from './comment.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentResolver, PrismaService],
  exports: [],
})
export class CommentModule {}
