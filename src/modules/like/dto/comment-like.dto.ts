import { ApiProperty } from '@nestjs/swagger';
import { PostDto as CommentDto } from 'src/modules/post/dto/post.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class CommentLikeDto {
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
    type: () => CommentDto,
  })
  comment: CommentDto;

  @ApiProperty()
  commentId: number;
}
