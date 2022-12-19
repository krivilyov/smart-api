# Заготовка для быстрого развертывания nest.js server

1. Клогируем проект из репозитория
2. Ставим БД PostgresSQL
3. Создаем Базу и меняем в конфигах данные для подключения
4. Создаем таблицу users

```
CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    "confirmHash" character varying COLLATE pg_catalog."default",
    role users_role_enum NOT NULL DEFAULT 'customer'::users_role_enum,
    "restoreHash" character varying COLLATE pg_catalog."default",
    "isActive" boolean NOT NULL DEFAULT false,
    avatar character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id)
)
```

5. `npm install`
6. `npm run start:dev`
