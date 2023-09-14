import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [PrismaService],
})
export class TagModule {}
