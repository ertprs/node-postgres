import Sequelize from 'sequelize';
import { sequelize } from '../database/database'

import Task from './Tasks'

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        required: true
    },
    name: {
        type: Sequelize.TEXT,
        required: true
    },
    priority: {
        type: Sequelize.SMALLINT,
        required: true
    },
    description: {
        type: Sequelize.TEXT,
        required: true
    },
    deliverydate: {
        type: Sequelize.DATE,
        required: true
    }
}, {
    timestamps: false
});

Project.hasMany(Task, { foreingKey: 'id_project', sourceKey: 'id' });
Task.belongsTo(Project, { foreingKey: 'id_project', sourceKey: 'id' })

export default Project;