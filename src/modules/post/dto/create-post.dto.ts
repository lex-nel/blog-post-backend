import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  longTitle: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  image: string;

  @ApiProperty({
    type: Number,
  })
  authorId: number;
}
