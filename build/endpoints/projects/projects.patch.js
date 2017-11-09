"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../dao/index");
function update(req, res) {
    console.log(req.body);
    return index_1.ProjectsDao.update(req.body)
        .then(project => res.status(201).send(project))
        .catch(error => res.boom.badRequest(error));
}
exports.update = update;

//# sourceMappingURL=projects.patch.js.map
