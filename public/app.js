"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var cube_1 = require("./components/primitives/cube");
var three_1 = require("three");
var OrbitControlsJS = require('three-orbit-controls')(THREE);
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.sceneObjects = [];
        // App runs here
        this.run = function () {
            requestAnimationFrame(_this.run);
            _this.update();
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.scene = new three_1.Scene();
        this.initCamera();
        this.initRenderer();
        this.initResize();
        this.initControls();
        this.initSceneObjects();
    }
    App.prototype.initResize = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.renderer.setSize(window.innerWidth, window.innerHeight);
            _this.camera.aspect = window.innerWidth / window.innerHeight;
            _this.camera.updateProjectionMatrix();
        });
    };
    App.prototype.initRenderer = function () {
        this.renderer = new three_1.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    };
    App.prototype.initControls = function () {
        this.controls = new OrbitControlsJS(this.camera, this.renderer.domElement);
    };
    App.prototype.initCamera = function () {
        var verticalFieldOfView = 75;
        var aspectRatio = window.innerWidth / window.innerHeight;
        var near = 0.1;
        var far = 1000;
        this.camera = new three_1.PerspectiveCamera(verticalFieldOfView, aspectRatio, near, far);
        this.camera.position.z = 3;
    };
    App.prototype.initSceneObjects = function () {
        var cube = new cube_1.Cube(1, 1, 1);
        this.sceneObjects.push(cube);
        this.scene.add(cube.getMesh());
    };
    // Logic goes here
    App.prototype.update = function () {
        this.sceneObjects.forEach(function (object) {
            if (object.animate) {
                object.animate();
            }
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map