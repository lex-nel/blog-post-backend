import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { PostCategory, Tag } from '@prisma/client';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class PostDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  publishedAt: string;

  @ApiProperty()
  isPublished: boolean;

  @ApiProperty()
  postCategory: PostCategory;

  @ApiProperty()
  image: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  longTitle: string;

  @ApiProperty()
  content: string;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [{ $ref: getSchemaPath(UserDto) }],
    },
  })
  author: UserDto;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  comments: Comment[];

  @ApiProperty()
  commentCount: number;

  @ApiProperty()
  tags: Tag[];
}
