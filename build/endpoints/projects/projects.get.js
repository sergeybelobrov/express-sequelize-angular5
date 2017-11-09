"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../dao/index");
function list(req, res) {
    return index_1.ProjectsDao
        .findAll()
        .then(projects => {
        projects.sort(function (a, b) {
            return a.createdAt.getTime() - b.createdAt.getTime();
        });
        res.status(200).send(projects);
    })
        .catch(error => res.boom.badRequest(error));
}
exports.list = list;

//# sourceMappingURL=projects.get.js.map
