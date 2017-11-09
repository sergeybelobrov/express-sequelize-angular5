"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineProject(sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        id: DataTypes.STRING(50),
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(50),
        status: DataTypes.STRING(50)
    });
    return Project;
}
exports.default = defineProject;
//# sourceMappingURL=project.js.map