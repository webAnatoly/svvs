export const environment = {
    production: false,
    connection: {
        type: process.env.DB_TYPE as 'aurora-postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER_NAME,
        password: process.env.DB_USER_PASSWORD,
        database: process.env.DB_NAME,
        dropSchema: false,
        synchronize: true,
        logging: true,
        entities: [
            'dist/apps/backend/api/src/**/*.entity{.ts, .js}',
        ],
        migrations: [
            'dist/apps/backend/api/migrations/*{.ts, .js}',
        ],
        cli: {
            'migrationsDir': 'db/migrations',
        },
    }
};

/*
How to export environment variables from any file on Linux in terminal before running any app/utils
export $(grep -v '^#' <path_to_env_file> | xargs -d '\n') &&  yarn backend-api:start
export $(grep -v '^#' .env_configs/.env.development.local | xargs -d '\n') &&  yarn backend-api:start
*/
