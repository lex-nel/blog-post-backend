import { ApiProperty } from '@nestjs/swagger';

export class CountDto {
  @ApiProperty()
  likes: number;
}
