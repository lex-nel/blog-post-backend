import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'src/modules/posts/dto/post.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
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
