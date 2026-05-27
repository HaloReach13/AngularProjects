import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class Todo extends Model {
    id!: number;
    description!: string;
    deadline!: Date;
    completionStatus!: boolean;
}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completionStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'todo'
    }
);