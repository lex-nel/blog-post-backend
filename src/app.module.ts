import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { DevtoolsModule } from '@nestjs/devtools-integration'
import { GraphQLModule } from '@nestjs/graphql'

import { PrismaService } from './services/prisma.service'

import { AuthModule } from './modules/auth/auth.module'
import { CommentModule } from './modules/comments/comments.module'
import { LikeModule } from './modules/likes/likes.module'
import { PostModule } from './modules/posts/posts.module'
import { TagModule } from './modules/tags/tags.module'
import { UserModule } from './modules/users/users.module'

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    TagModule,
    LikeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
