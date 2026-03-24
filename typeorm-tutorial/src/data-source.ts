import "reflect-metadata"
import { DataSource } from "typeorm"
import { Student } from "./entity/Student"
import { StudentCard } from "./entity/StudentCard"
import { Course } from "./entity/Course"
import { Teacher } from "./entity/Teacher"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "193.6.4.207",
    port: 13307,
    username: "fiwxdx",
    password: "juhaszbazsi13",
    database: "fiwxdx",
    synchronize: true,
    logging: true,
    entities: [Student, StudentCard, Course, Teacher],
    migrations: [],
    subscribers: [],
})
