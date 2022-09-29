import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma.service';
import { Tag } from './tag.model';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Tag], { description: 'Return tags' })
  async tags() {
    return this.prisma.tag.findMany();
  }
}
