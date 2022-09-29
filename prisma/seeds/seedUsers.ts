import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedUsers(prisma: PrismaClient) {
  const users = times(33, () => {
    const createdAt = faker.date.past();
    const updatedAt = faker.datatype.boolean()
      ? faker.date.soon(2, createdAt.toISOString())
      : createdAt;

    return {
      createdAt,
      updatedAt,
      email: faker.internet.email(),
      password: 'password',
      firstName: faker.name.firstName(),
      midName: faker.name.middleName(),
      lastName: faker.name.lastName(),
    };
  });

  await prisma.user.createMany({ data: users });
}
