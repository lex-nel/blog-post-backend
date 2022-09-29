import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedTags(prisma: PrismaClient) {
  const tags = times(24, () => {
    const createdAt = faker.date.past();
    const updatedAt = faker.datatype.boolean()
      ? faker.date.soon(2, createdAt.toISOString())
      : createdAt;

    return {
      createdAt,
      updatedAt,
      title: faker.lorem.word(),
    };
  });

  await prisma.tag.createMany({ data: tags });
}
