"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _env = _interopRequireDefault(require("../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](_env["default"].DATABASE, _env["default"].USER, _env["default"].PASSWORD, {
  host: _env["default"].HOST,
  dialect: _env["default"].DRIVER,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;