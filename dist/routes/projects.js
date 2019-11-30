"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projectCriarController = require("../controllers/projectCriarController");

var _projectBuscarController = require("../controllers/projectBuscarController");

var _projectBuscarByIDController = require("../controllers/projectBuscarByIDController");

var _projectExcluirByIDController = require("../controllers/projectExcluirByIDController");

var _projectAtualizarByIDController = require("../controllers/projectAtualizarByIDController");

var router = (0, _express.Router)();
console.log('Criar Projeto        --- Method: POST   --- Rota: /api/projects/');
router.post('/', _projectCriarController.createProject);
console.log('Listar Projetos      --- Method: GET    --- Rota: /api/projects/');
router.get('/', _projectBuscarController.getProjects);
console.log('Listar Projeto by ID --- Method: GET    --- Rota: /api/projects/:id');
router.get('/:id', _projectBuscarByIDController.getProjectByID);
console.log('Excluir Projeto      --- Method: DELETE --- Rota: /api/projects/:id');
router["delete"]('/:id', _projectExcluirByIDController.deleteProjectByID);
console.log('Atualizar Projeto    --- Method: PUT    --- Rota: /api/projects/:id');
router.put('/:id', _projectAtualizarByIDController.atualizarProjectByID);
var _default = router;
exports["default"] = _default;