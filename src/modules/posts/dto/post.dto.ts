import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@prisma/client';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { CountDto } from './count.dto';

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
  image: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  longTitle: string;

  @ApiProperty()
  content: string;

  @ApiProperty({
    type: () => UserDto,
  })
  author: UserDto;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  comments: Comment[];

  @ApiProperty()
  tags: Tag[];

  @ApiProperty({
    type: () => CountDto,
  })
  _count: CountDto;
}
