"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MessagesController = void 0;
var common_1 = require("@nestjs/common");
// Class decorator
var MessagesController = /** @class */ (function () {
    function MessagesController() {
    }
    // method decorator
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MessagesController.prototype.listMessages = function () { };
    MessagesController.prototype.createMessage = function (body) {
        console.log(body);
    };
    MessagesController.prototype.getMessage = function (id) {
        console.log(id);
    };
    __decorate([
        (0, common_1.Get)()
        // eslint-disable-next-line @typescript-eslint/no-empty-function
    ], MessagesController.prototype, "listMessages");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], MessagesController.prototype, "createMessage");
    __decorate([
        (0, common_1.Get)('/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], MessagesController.prototype, "getMessage");
    MessagesController = __decorate([
        (0, common_1.Controller)('messages')
    ], MessagesController);
    return MessagesController;
}());
exports.MessagesController = MessagesController;
