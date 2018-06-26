import {Cube} from "../primitives/cube";
import {DoubleSide, Material, Mesh, MeshBasicMaterial, TextureLoader} from "three";

export class Crate extends Cube {

    constructor(
        width: number,
        height: number,
        depth: number,
        color: number = 0xFFFFFF,
        wireframe: boolean = false
    ) {
        super(width, height, depth, color, wireframe);

        const texture = new TextureLoader().load('textures/crate.jpg');

        const crateMaterial: Material[] = [
            new MeshBasicMaterial({ map: texture, side: DoubleSide }), // RIGHT
            new MeshBasicMaterial({ map: texture, side: DoubleSide }), // LEFT
            new MeshBasicMaterial({ map: texture, side: DoubleSide }), // TOP
            new MeshBasicMaterial({ map: texture, side: DoubleSide }), // BOTTOM
            new MeshBasicMaterial({ map: texture, side: DoubleSide }), // FRONT
            new MeshBasicMaterial({ map: texture, side: DoubleSide })  // BACK
        ];

        this.material = crateMaterial;
        this.mesh = new Mesh(this.geometry, this.material);
    }
}