import {
  ArgsType,
  Field,
  ID,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { User } from 'src/modules/user/user.model';
import { Comment } from 'src/modules/comment/comment.model';
import { Tag } from 'src/modules/tag/tag.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @Field(() => String, { nullable: true })
  publishedAt: string;

  @Field(() => Boolean)
  isPublished: boolean;

  @Field(() => String)
  image: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  longTitle: string;

  @Field(() => String)
  content: string;

  @Field(() => User)
  author: User;

  @Field(() => Int)
  authorId: number;

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => Int)
  commentCount: number;

  @Field(() => [Tag])
  tags: Tag[];
}

@ArgsType()
export class PostsArgs {
  @Field(() => Int)
  skip = 0;

  @Field(() => Int)
  take = 10;
}

@ArgsType()
export class PostArgs {
  @Field(() => ID)
  id: string;
}

@InputType()
export class CreatePostInput {
  @Field()
  image: string;

  @Field()
  title: string;

  @Field()
  longTitle: string;

  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;
}

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  isPublished: boolean;

  @Field()
  title: string;

  @Field()
  longTitle: string;

  @Field()
  content: string;
}
