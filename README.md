# Blog Post

## Описание

Тестовый Backend

## Установка

```bash
$ yarn
```

## Пост установка

Необходима БД, например PostgreSQL. Доступ к БД прописать в файле .env, DATABASE_URL.

```bash
$ npx prisma migrate # Запуск миграций
$ npx prisma generate # Генерация моделей
$ npx prisma db seed # Заполнение БД данными

$ npx prisma studio # Графический интерфейс для БД
```

## Запуск

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## License

Nest is [MIT licensed](LICENSE).
