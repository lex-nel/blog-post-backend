import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  longTitle: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  image: string;
}
