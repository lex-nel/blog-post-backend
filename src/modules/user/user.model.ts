import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/modules/comment/comment.model';
import { Post } from 'src/modules/post/post.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @Field(() => String)
  email: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  midName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => Int)
  postCount: number;

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => Int)
  commentCount: number;
}

@ArgsType()
export class UsersArgs {
  @Field(() => Int)
  skip = 0;

  @Field(() => Int)
  take = 10;
}

@ArgsType()
export class UserArgs {
  @Field(() => Int)
  id: number;
}

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field()
  midName: string;

  @Field()
  lastName: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  midName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
