"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../endpoints/index");
function routes(app) {
    app.get('/api/languages', index_1.ProjectsController.ProjectsGet.list);
    app.post('/api/languages', index_1.ProjectsController.ProjectsPost.create);
}
exports.routes = routes;
//# sourceMappingURL=project.js.map