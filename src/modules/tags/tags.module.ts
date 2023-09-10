import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TagsResolver } from './resolvers/tags.resolver';

@Module({
  providers: [TagsResolver, PrismaService],
  exports: [],
})
export class TagModule {}
