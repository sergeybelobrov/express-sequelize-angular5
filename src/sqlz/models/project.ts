import * as Sequelize from 'sequelize'

export interface ProjectAttributes {
    id?: string
    name?: string
    description?: string
    status?: string
  }

export interface ProjectInstance extends Sequelize.Instance<ProjectAttributes> {
  id?: string
  name?: string
  createdAt: Date
  updatedAt: Date
  description?: string
  status?: string
}

export default function defineProject(sequelize: Sequelize.Sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING(50),
    description: DataTypes.STRING(255),
    status: DataTypes.STRING(50)
  })
  return Project
}