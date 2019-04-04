'use strict';
var permissionDA = require('./permissionDA');

exports.permissionRole = function (req, res) {
    try {
        permissionDA.permissionRole(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.getRoles = function (req, res) {
    try {
        permissionDA.getRoles(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.deleteRoles = function (req, res) {
    try {
        permissionDA.deleteRoles(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.editRoles = function (req, res) {
    try {
        permissionDA.editRoles(req, res);
    } catch (error) {
        console.log(error);
    }

}