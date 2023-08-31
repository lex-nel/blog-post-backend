import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { LikeController } from './like.controller';

@Module({
  controllers: [LikeController],
  providers: [PrismaService],
  exports: [],
})
export class LikeModule {}
