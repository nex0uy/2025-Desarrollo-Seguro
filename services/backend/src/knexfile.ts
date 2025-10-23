// knexfile.ts
import type { Knex } from 'knex';
import 'dotenv/config';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT ?? 5432),
    },
    migrations: { tableName: 'knex_migrations' },
    seeds: { directory: './seeds' },
  },
};

export default config;