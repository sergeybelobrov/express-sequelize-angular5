"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../sqlz/models/index");
const Promise = require("bluebird");
function create(project) {
    return index_1.default.Project
        .create({
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
function destroy(project) {
    return index_1.default.Project
        .destroy({
        where: {
            id: project.id
        }
    });
}
exports.destroy = destroy;
function find(project) {
    return index_1.default.Project
        .find({
        where: {
            id: project.id
        }
    });
}
exports.find = find;
function update(project) {
    return new Promise((resolve, reject) => {
        index_1.default.Project
            .find({
            where: {
                id: project.id
            }
        })
            .then(fp => {
            if (fp)
                return fp.updateAttributes(project);
            else
                reject("identified project is not available");
        })
            .catch(error => reject(error))
            .then(ufp => {
            resolve(ufp);
        })
            .catch(error => reject(error));
    });
}
exports.update = update;

//# sourceMappingURL=projects.js.map
