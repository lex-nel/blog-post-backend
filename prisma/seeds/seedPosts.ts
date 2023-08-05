import { faker } from '@faker-js/faker/locale/ru';
import { PostCategory, PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedPosts(prisma: PrismaClient) {
  const posts = times(157, () => {
    const createdAt = faker.date.past();
    const isUpdated = faker.datatype.boolean();
    const updatedAt = isUpdated
      ? faker.date.soon(2, createdAt.toISOString())
      : createdAt;
    const isPublished = isUpdated ? faker.datatype.boolean() : false;
    const publishedAt =
      isUpdated && isPublished
        ? faker.date.soon(2, updatedAt?.toISOString())
        : null;

    return {
      createdAt,
      updatedAt,
      publishedAt,
      isPublished,
      postCategory: faker.helpers.arrayElement([
        PostCategory.BLOG,
        PostCategory.NEWS,
      ]),
      image: faker.image.cats(),
      title: faker.lorem.sentence(),
      longTitle: faker.lorem.sentences(2),
      content: '<p>' + faker.lorem.paragraphs(5, '</p><p>') + '</p>',
      authorId: faker.datatype.number({ min: 1, max: 33 }),
    };
  });

  await prisma.post.createMany({ data: posts });
}
