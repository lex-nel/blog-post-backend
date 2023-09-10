import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CommentsResolver } from './resolvers/comments.resolver';
import { CommentsController } from './controllers/comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsResolver, PrismaService],
  exports: [],
})
export class CommentModule {}
