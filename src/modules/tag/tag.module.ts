import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TagResolver } from './tag.resolver';

@Module({
  providers: [TagResolver, PrismaService],
  exports: [],
})
export class TagModule {}
