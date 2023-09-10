import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersResolver, PrismaService],
  exports: [UsersResolver],
})
export class UserModule {}
