import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'src/modules/post/dto/post.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { CountDto } from './count.dto';

export class CommentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  content: string;

  @ApiProperty({
    type: () => UserDto,
  })
  author: UserDto;

  @ApiProperty()
  authorId: number;

  @ApiProperty({
    type: () => PostDto,
  })
  post: PostDto;

  @ApiProperty()
  postId: number;

  @ApiProperty({
    type: () => CountDto,
  })
  _count: CountDto;
}
