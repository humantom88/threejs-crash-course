import {Cube} from "../primitives/cube";
import {DoubleSide, Material, Mesh, MeshLambertMaterial, TextureLoader} from "three";
import {CRATE_BASIC} from "../../textures";

export class Crate extends Cube {

    constructor(
        width: number,
        height: number,
        depth: number,
        color: number = 0xFFFFFF,
        wireframe: boolean = false
    ) {
        super(width, height, depth, color, wireframe);

        const texture = new TextureLoader().load(CRATE_BASIC);

        const crateMaterial: Material[] = [
            new MeshLambertMaterial({ map: texture, side: DoubleSide }), // RIGHT
            new MeshLambertMaterial({ map: texture, side: DoubleSide }), // LEFT
            new MeshLambertMaterial({ map: texture, side: DoubleSide }), // TOP
            new MeshLambertMaterial({ map: texture, side: DoubleSide }), // BOTTOM
            new MeshLambertMaterial({ map: texture, side: DoubleSide }), // FRONT
            new MeshLambertMaterial({ map: texture, side: DoubleSide })  // BACK
        ];

        this.material = crateMaterial;
        this.mesh = new Mesh(this.geometry, this.material);
    }
}