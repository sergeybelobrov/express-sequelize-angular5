"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineProject(sequelize, DataTypes) {
    const Project = sequelize.define('Project', {
        name: DataTypes.STRING(50),
        description: DataTypes.STRING(255),
        status: DataTypes.STRING(50)
    });
    return Project;
}
exports.default = defineProject;

//# sourceMappingURL=project.js.map
