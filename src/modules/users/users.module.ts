import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [PrismaService],
})
export class UserModule {}
