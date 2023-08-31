import { faker } from '@faker-js/faker/locale/ru';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedComments(prisma: PrismaClient) {
  const comments = times(439, () => {
    const createdAt = faker.date.past();
    const updatedAt = faker.datatype.boolean()
      ? faker.date.soon({ days: 2, refDate: createdAt.toISOString() })
      : createdAt;

    return {
      createdAt,
      updatedAt,
      content: faker.lorem.paragraph(),
      authorId: faker.number.int({ min: 1, max: 33 }),
      postId: faker.number.int({ min: 1, max: 157 }),
    };
  });

  await prisma.comment.createMany({ data: comments });
}
