"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../dao/index");
function create(req, res) {
    console.log(req.body);
    return index_1.ProjectsDao.create(req.body)
        .then(project => res.status(201).send(project))
        .catch(error => res.boom.badRequest(error));
}
exports.create = create;

//# sourceMappingURL=projects.post.js.map
