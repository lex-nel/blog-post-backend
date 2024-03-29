import { faker } from '@faker-js/faker/locale/ru';
import { PrismaClient, TagsOnPosts } from '@prisma/client';
import { isEqual, times, uniqWith } from 'lodash';

export async function seedTagsOnPosts(prisma: PrismaClient) {
  const tagsOnPosts: TagsOnPosts[] = times(333, () => {
    return {
      postId: faker.number.int({ min: 1, max: 157 }),
      tagId: faker.number.int({ min: 1, max: 24 }),
    };
  });

  await prisma.tagsOnPosts.createMany({ data: uniqWith(tagsOnPosts, isEqual) });
}
