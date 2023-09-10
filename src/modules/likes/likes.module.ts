import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { LikesController } from './controllers/likes.controller';

@Module({
  controllers: [LikesController],
  providers: [PrismaService],
  exports: [],
})
export class LikeModule {}
