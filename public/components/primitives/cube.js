"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var Cube = /** @class */ (function () {
    function Cube(width, height, depth, color, wireframe) {
        if (color === void 0) { color = 0xFFFFFF; }
        if (wireframe === void 0) { wireframe = false; }
        this.geometry = new three_1.BoxGeometry(width, height, depth);
        this.material = new three_1.MeshBasicMaterial({ color: color, wireframe: wireframe });
        this.mesh = new three_1.Mesh(this.geometry, this.material);
    }
    Cube.prototype.getMesh = function () {
        return this.mesh;
    };
    Cube.prototype.animate = function () {
        this.rotateAnimation();
    };
    Cube.prototype.rotateAnimation = function () {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    };
    return Cube;
}());
exports.Cube = Cube;
//# sourceMappingURL=cube.js.map