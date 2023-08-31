import { faker } from '@faker-js/faker/locale/ru';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedPosts(prisma: PrismaClient) {
  const posts = times(157, () => {
    const createdAt = faker.date.past();
    const isUpdated = faker.datatype.boolean();
    const updatedAt = isUpdated
      ? faker.date.soon({ days: 2, refDate: createdAt.toISOString() })
      : createdAt;
    const isPublished = isUpdated ? faker.datatype.boolean() : false;
    const publishedAt =
      isUpdated && isPublished
        ? faker.date.soon({ days: 2, refDate: createdAt.toISOString() })
        : null;

    return {
      createdAt,
      updatedAt,
      publishedAt,
      isPublished,
      image: faker.image.urlLoremFlickr({ category: 'cats' }),
      title: faker.lorem.sentence(),
      longTitle: faker.lorem.sentences(2),
      content: '<p>' + faker.lorem.paragraphs(5, '</p><p>') + '</p>',
      authorId: faker.number.int({ min: 1, max: 33 }),
    };
  });

  await prisma.post.createMany({ data: posts });
}
