import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
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
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(PostDto) }],
    },
  })
  posts: PostDto[];

  @ApiProperty()
  postCount: number;

  @ApiProperty()
  comments: Comment[];

  @ApiProperty()
  commentCount: number;
}
