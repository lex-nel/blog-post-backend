import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CommentsController } from './controllers/comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [PrismaService],
})
export class CommentModule {}
