import * as THREE from 'three';
import {Cube} from './components/primitives/cube';
import {OrbitControls, PerspectiveCamera, Scene, WebGLRenderer} from "three";


const OrbitControlsJS = require('three-orbit-controls')(THREE);

export class App {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    private sceneObjects: any[] = [];
    private controls: OrbitControls;

    constructor () {
        this.scene = new Scene();
        this.initCamera();
        this.initRenderer();
        this.initResize();
        this.initControls();
        this.initSceneObjects();
    }

    private initResize () {
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        })
    }

    private initRenderer() {
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    private initControls () {
        this.controls = new OrbitControlsJS(this.camera, this.renderer.domElement);
    }

    private initCamera () {
        const verticalFieldOfView = 75;
        const aspectRatio = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;

        this.camera = new PerspectiveCamera(verticalFieldOfView, aspectRatio, near, far);
        this.camera.position.z = 3;
    }

    private initSceneObjects () {
        const cube = new Cube(1, 1, 1);
        this.sceneObjects.push(cube);
        this.scene.add(cube.getMesh());
    }

    // Logic goes here
    private update () {
        this.sceneObjects.forEach((object: any) => {
            if (object.animate) {
                object.animate();
            }
        })
    }

    // App runs here
    public run = () => {
        requestAnimationFrame(this.run);
        this.update();
        this.renderer.render(this.scene, this.camera);
    }
}