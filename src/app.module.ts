import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

import { PrismaService } from './services/prisma.service';

import { UserModule } from './modules/users/users.module';
import { PostModule } from './modules/posts/posts.module';
import { CommentModule } from './modules/comments/comments.module';
import { TagModule } from './modules/tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { LikeModule } from './modules/likes/likes.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    TagModule,
    LikeModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
