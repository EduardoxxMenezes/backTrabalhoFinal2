import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'usuariospetshop.sqlite',
    synchronize: true,
    logging: true,
    entities: ["src/model/*.ts"],
});
