"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../dao/index");
function create(req, res) {
    return index_1.ProjectsDao.create(req.body)
        .then(language => res.status(201).send(language))
        .catch(error => res.boom.badRequest(error));
}
exports.create = create;
//# sourceMappingURL=projects.post.js.map