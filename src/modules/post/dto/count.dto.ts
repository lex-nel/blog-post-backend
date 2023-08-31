import { ApiProperty } from '@nestjs/swagger';

export class CountDto {
  @ApiProperty()
  comments: number;

  @ApiProperty()
  likes: number;
}
