import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';
import { faker } from '@faker-js/faker/locale/ru';

export async function seedLikes(prisma: PrismaClient) {
  const postLikes = times(1000, () => {
    const createdAt = faker.date.past();

    return {
      createdAt,
      authorId: faker.number.int({ min: 1, max: 33 }),
      postId: faker.number.int({ min: 1, max: 157 }),
    };
  });

  const commentLikes = times(1000, () => {
    const createdAt = faker.date.past();

    return {
      createdAt,
      authorId: faker.number.int({ min: 1, max: 33 }),
      commentId: faker.number.int({ min: 1, max: 439 }),
    };
  });

  await prisma.postLikes.createMany({ data: postLikes });
  await prisma.commentLikes.createMany({ data: commentLikes });
}
