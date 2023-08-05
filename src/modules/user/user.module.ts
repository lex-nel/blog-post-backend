import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UserResolver } from './user.resolver';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [UserResolver, PrismaService],
  exports: [UserResolver],
})
export class UserModule {}
