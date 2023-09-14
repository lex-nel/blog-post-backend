import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'src/modules/posts/dto/post.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';

export class PostLikeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: string;

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
}
