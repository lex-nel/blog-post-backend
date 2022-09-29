import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, PrismaService],
  exports: [UserResolver],
})
export class UserModule {}
