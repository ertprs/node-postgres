"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProjectByID = deleteProjectByID;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function deleteProjectByID(_x, _x2) {
  return _deleteProjectByID.apply(this, arguments);
}

function _deleteProjectByID() {
  _deleteProjectByID = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, deleteProject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteProject = _context.sent;

            if (!deleteProject) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Project excluded with successfully',
              count: deleteProject
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: 'Exclusion of project with failure',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _deleteProjectByID.apply(this, arguments);
}