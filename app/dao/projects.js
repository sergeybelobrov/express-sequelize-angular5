"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const index_1 = require("../sqlz/models/index");
function create(project) {
    return index_1.default.Project
        .create({
        id: uuid.v1(),
        name: project.name,
        description: project.description,
        status: project.status
    });
}
exports.create = create;
function findAll() {
    return index_1.default.Project
        .findAll();
}
exports.findAll = findAll;
//# sourceMappingURL=projects.js.map