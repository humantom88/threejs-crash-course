import {
    BoxGeometry,
    Geometry,
    Material,
    Mesh,
    MeshBasicMaterial
} from "three";

export class Cube {
    private geometry: Geometry;
    private material: Material;
    private mesh: Mesh;

    constructor(width: number,
                height: number,
                depth: number,
                color: number = 0xFFFFFF,
                wireframe: boolean = false) {
        this.geometry = new BoxGeometry(width, height, depth);
        this.material = new MeshBasicMaterial({color, wireframe});
        this.mesh = new Mesh(this.geometry, this.material);
    }

    public getMesh(): Mesh {
        return this.mesh;
    }

    public animate () {
        this.rotateAnimation()
    }

    rotateAnimation () {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }

}