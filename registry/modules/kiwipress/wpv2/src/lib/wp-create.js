"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WPCreate = void 0;
var WPCreate = /** @class */ (function () {
    function WPCreate(username, password) {
        this.username = username;
        this.password = password;
    }
    // Create methods
    WPCreate.prototype.createPost = function (post) {
        return 'Post created';
    };
    return WPCreate;
}());
exports.WPCreate = WPCreate;
