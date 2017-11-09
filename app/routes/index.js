"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const ProjectsRoutes = require("./project");
function initRoutes(app) {
    winston.log('info', '--> Initialisations des routes');
    app.get('/api', (req, res) => res.status(200).send({
        message: 'server is running!'
    }));
    ProjectsRoutes.routes(app);
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=index.js.map