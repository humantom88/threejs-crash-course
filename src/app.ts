import * as THREE from 'three';
import {AmbientLight, Cache, OrbitControls, PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import {Crate} from './components/crates/crate';
import add = Cache.add;
import {Floor} from "./components/floors/floor";
import {Wall} from "./components/walls/wall";
import {Ceiling} from "./components/ceilings/ceiling";


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
        this.initLights();
    }

    private initLights () {
        const color = 0xFFFFFF;
        const intensity = 0.5;
        const ambientLight = new AmbientLight(0xFFFFFF, 0.5);
        this.scene.add(ambientLight);
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
        const cube = new Crate(1, 1, 1);
        this.sceneObjects.push(cube);
        this.scene.add(cube.getMesh());

        const floor = new Floor();
        floor.getMesh().position.y = -5;
        this.sceneObjects.push(floor);
        this.scene.add(floor.getMesh());

        const leftWall = new Wall();
        leftWall.getMesh().position.x = -5;
        this.sceneObjects.push(leftWall);
        this.scene.add(leftWall.getMesh());


        const rightWall = new Wall();
        rightWall.getMesh().position.x = 5;
        this.sceneObjects.push(rightWall);
        this.scene.add(rightWall.getMesh());


        const ceeling = new Ceiling();
        ceeling.getMesh().position.y = 5;
        this.sceneObjects.push(ceeling);
        this.scene.add(ceeling.getMesh());
    }

    // Logic goes here
    private update () {

    }

    // App runs here
    public run = () => {
        requestAnimationFrame(this.run);
        this.update();
        this.renderer.render(this.scene, this.camera);
    }
}