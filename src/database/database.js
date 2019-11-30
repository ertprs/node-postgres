import Sequelize from 'sequelize';
import env from '../config/env'

export const sequelize = new Sequelize(
    env.DATABASE,
    env.USER,
    env.PASSWORD,
    {
        host: env.HOST,
        dialect: env.DRIVER,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)