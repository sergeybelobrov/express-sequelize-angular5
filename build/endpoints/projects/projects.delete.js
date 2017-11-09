"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../dao/index");
function destroy(req, res) {
    console.log(req.body);
    return index_1.ProjectsDao.destroy(req.body)
        .then(deleted => {
        if (deleted)
            res.status(201).send('success');
        else
            res.boom.badRequest('does not exist');
    });
}
exports.destroy = destroy;

//# sourceMappingURL=projects.delete.js.map
