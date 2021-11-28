import { Module } from '@nestjs/common';
import { CommentController } from './controllers/comment.controller';
import { PostController } from './controllers/post.controller';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [UserController, PostController, CommentController],
  providers: [PrismaService],
})
export class AppModule {}
