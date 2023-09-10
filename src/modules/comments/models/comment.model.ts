import {
  ArgsType,
  Field,
  ID,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { Post } from 'src/modules/posts/models/post.model';
import { User } from 'src/modules/users/models/user.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @Field(() => String)
  content: string;

  @Field(() => User)
  author: User;

  @Field(() => Int)
  authorId: number;

  @Field(() => Post)
  post: Post;

  @Field(() => Int)
  postId: number;
}

@ArgsType()
export class CommentsArgs {
  @Field(() => Int)
  skip = 0;

  @Field(() => Int)
  take = 10;
}

@ArgsType()
export class CommentArgs {
  @Field(() => ID)
  id: string;
}

@InputType()
export class CreateCommentInput {
  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => Int)
  postId: number;
}

@InputType()
export class UpdateCommentInput {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;
}
