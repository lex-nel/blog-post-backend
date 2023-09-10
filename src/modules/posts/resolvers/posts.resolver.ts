import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma.service';
import {
  PostArgs,
  PostsArgs,
  Post,
  CreatePostInput,
  UpdatePostInput,
} from '../models/post.model';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Post])
  async posts(@Args() args: PostsArgs) {
    return this.prisma.post.findMany(args);
  }

  @Query(() => Int)
  async postCount() {
    return this.prisma.post.count();
  }

  @Query(() => Post)
  async post(@Args() args: PostArgs) {
    return this.prisma.post.findUnique({
      where: { id: parseInt(args.id, 10) },
    });
  }

  @Mutation(() => Post)
  async createPost(@Args('post') args: CreatePostInput) {
    return this.prisma.post.create({ data: args });
  }

  @Mutation(() => Post)
  async updatePost(@Args('post') args: UpdatePostInput) {
    return this.prisma.post.update({
      where: { id: args.id },
      data: args,
    });
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }

  @ResolveField()
  async comments(@Parent() post: Post) {
    return this.prisma.comment.findMany({
      where: { postId: post.id },
    });
  }

  @ResolveField()
  async commentCount(@Parent() post: Post) {
    return this.prisma.comment.count({
      where: {
        postId: post.id,
      },
    });
  }

  @ResolveField()
  async author(@Parent() post: Post) {
    return this.prisma.user.findFirst({
      where: { id: post.authorId },
    });
  }

  @ResolveField()
  async tags(@Parent() post: Post) {
    const tagsOnPosts = await this.prisma.tagsOnPosts.findMany({
      where: { postId: post.id },
    });

    return this.prisma.tag.findMany({
      where: {
        id: {
          in: tagsOnPosts.map((i) => i.tagId),
        },
      },
    });
  }
}
