import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedComments(prisma: PrismaClient) {
  const comments = times(439, () => {
    const createdAt = faker.date.past();
    const updatedAt = faker.datatype.boolean()
      ? faker.date.soon(2, createdAt.toISOString())
      : createdAt;

    return {
      createdAt,
      updatedAt,
      content: faker.lorem.paragraph(),
      authorId: faker.datatype.number({ min: 1, max: 33 }),
      postId: faker.datatype.number({ min: 1, max: 157 }),
    };
  });

  await prisma.comment.createMany({ data: comments });
}
