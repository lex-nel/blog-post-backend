import { faker } from '@faker-js/faker/locale/ru';
import { PrismaClient } from '@prisma/client';
import { times } from 'lodash';

export async function seedUsers(prisma: PrismaClient) {
  const users = times(33, () => {
    const createdAt = faker.date.past();
    const updatedAt = faker.datatype.boolean()
      ? faker.date.soon({ days: 2, refDate: createdAt.toISOString() })
      : createdAt;

    return {
      createdAt,
      updatedAt,
      email: faker.internet.email(),
      password: 'password',
      firstName: faker.person.firstName(),
      midName: faker.person.middleName(),
      lastName: faker.person.lastName(),
    };
  });

  await prisma.user.createMany({ data: users });
}
