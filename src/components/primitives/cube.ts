import {
    BoxGeometry,
    Geometry,
    Material,
    Mesh,
    MeshBasicMaterial
} from "three";

export class Cube {
    protected geometry: Geometry;
    protected material: Material | Material[];
    protected mesh: Mesh;

    constructor(width: number,
                height: number,
                depth: number,
                color: number = 0xFFFFFF,
                wireframe: boolean = false) {
        this.geometry = new BoxGeometry(width, height, depth);
        this.material = new MeshBasicMaterial({ color, wireframe });
        this.mesh = new Mesh(this.geometry, this.material);
    }

    public getMesh(): Mesh {
        return this.mesh;
    }

    setMaterial (material: Material | Material[]) {
        this.material = material;
    }

}