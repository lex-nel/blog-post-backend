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
  Comment,
  CommentArgs,
  CommentsArgs,
  CreateCommentInput,
  UpdateCommentInput,
} from '../models/comment.model';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Comment], { description: 'Return comments' })
  async comments(@Args() args: CommentsArgs) {
    return this.prisma.comment.findMany(args);
  }

  @Query(() => Int)
  async commentCount() {
    return this.prisma.comment.count();
  }

  @Query(() => Comment, { description: 'Return comment' })
  async comment(@Args() args: CommentArgs) {
    return this.prisma.comment.findUnique({
      where: { id: parseInt(args.id, 10) },
    });
  }

  @Mutation(() => Comment)
  async createComment(@Args('comment') args: CreateCommentInput) {
    return this.prisma.comment.create({ data: args });
  }

  @Mutation(() => Comment)
  async updateComment(@Args('comment') args: UpdateCommentInput) {
    return this.prisma.comment.update({
      where: { id: args.id },
      data: args,
    });
  }

  @Mutation(() => Comment)
  async deleteComment(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }

  @ResolveField()
  async author(@Parent() comment: Comment) {
    return this.prisma.user.findFirst({
      where: { id: comment.authorId },
    });
  }

  @ResolveField()
  async post(@Parent() comment: Comment) {
    return this.prisma.post.findFirst({
      where: { id: comment.postId },
    });
  }
}
