import { ApiProperty } from '@nestjs/swagger';
import { CommentDto } from 'src/modules/comment/dto/comment.dto';
import { PostDto } from 'src/modules/post/dto/post.dto';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  email: number;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  midName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty({
    type: () => [PostDto],
  })
  posts: PostDto[];

  @ApiProperty()
  postCount: number;

  @ApiProperty({
    type: () => [CommentDto],
  })
  comments: CommentDto[];

  @ApiProperty()
  commentCount: number;
}
