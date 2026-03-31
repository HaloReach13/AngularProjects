import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "193.6.4.207",
    port: 13307,
    username: "fiwxdx",
    password: "juhaszbazsi13",
    database: "fiwxdx",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});