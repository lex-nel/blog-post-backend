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
  UsersArgs,
  User,
  UserArgs,
  CreateUserInput,
  UpdateUserInput,
} from '../models/user.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User])
  async users(@Args() args: UsersArgs) {
    return this.prisma.user.findMany(args);
  }

  @Query(() => Int)
  async userCount() {
    return this.prisma.user.count();
  }

  @Query(() => User, { description: 'Return user' })
  async user(@Args() args: UserArgs) {
    return this.prisma.user.findUnique({
      where: { id: args.id },
    });
  }

  @Mutation(() => User)
  async createUser(@Args('user') args: CreateUserInput) {
    return this.prisma.user.create({ data: args });
  }

  @Mutation(() => User)
  async updateUser(@Args('user') args: UpdateUserInput) {
    const { id, ...data } = args;
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: string) {
    console.log(id);
    return this.prisma.user.delete({ where: { id: parseInt(id, 10) } });
  }

  @ResolveField()
  async posts(@Parent() author: User) {
    return this.prisma.post.findMany({
      where: { author: { id: author.id } },
    });
  }

  @ResolveField()
  async postCount(@Parent() author: User) {
    return this.prisma.post.count({
      where: {
        authorId: author.id,
      },
    });
  }

  @ResolveField()
  async comments(@Parent() author: User) {
    return this.prisma.comment.findMany({
      where: { author: { id: author.id } },
    });
  }

  @ResolveField()
  async commentCount(@Parent() author: User) {
    return this.prisma.comment.count({
      where: {
        authorId: author.id,
      },
    });
  }
}
