import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/seedUsers';
import { seedPosts } from './seeds/seedPosts';
import { seedTags } from './seeds/seedTags';
import { seedComments } from './seeds/seedComents';
import { seedTagsOnPosts } from './seeds/seedTagsOnPosts';

const prisma = new PrismaClient();

async function main() {
  await prisma.tagsOnPosts.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});

  await seedTags(prisma);
  await seedUsers(prisma);
  await seedPosts(prisma);
  await seedComments(prisma);
  await seedTagsOnPosts(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
