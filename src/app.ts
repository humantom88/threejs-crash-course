import {
    Camera,
    Scene,
    WebGLRenderer,
    Object3D,
    PerspectiveCamera
} from 'three';

export class App {
    private scene: Scene;
    private camera: Camera;
    private renderer: WebGLRenderer;
    private sceneObjects: Object3D[];

    constructor () {
        this.scene = Scene();
        this.initCamera();
        this.initRenderer();
        this.initResize()
    }

    private initResize () {
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect(window.innerWidth, window.innerHeight);
            this.camera.updateProjectionMatrix();
        })
    }

    private initRenderer() {
        this.renderer = WebGLRenderer();
        this.renderer.setSize(window.innerHeight, window.innerHeight);
        document.appendChild(this.renderer.domElement);
    }

    private initCamera () {
        const verticalFieldOfView = 75;
        const aspectRatio = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;

        this.camera = PerspectiveCamera(verticalFieldOfView, aspectRatio, near, far);
    }

    // Logic goes here
    private update () {

    }

    // App runs here
    public run () {
        requestAnimationFrame(this.run);
        this.update();
        this.renderer.render(this.scene, this.camera);
    }
}