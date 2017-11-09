"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../endpoints/index");
function routes(app) {
    app.get('/api/projects', index_1.ProjectsController.ProjectsGet.list);
    app.post('/api/projects', index_1.ProjectsController.ProjectsPost.create);
    app.delete('/api/projects', index_1.ProjectsController.ProjectsDestroy.destroy);
    app.patch('/api/projects', index_1.ProjectsController.ProjectsUpdate.update);
}
exports.routes = routes;

//# sourceMappingURL=project.js.map
