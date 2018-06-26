import {
    DoubleSide,
    Material,
    Mesh,
    MeshLambertMaterial,
    TextureLoader
} from 'three';
import {Cube} from "../primitives/cube";
import {CEILING_BASIC} from "../../textures";

export class Ceiling extends Cube {
    constructor (
        width?: number,
        height?: number,
        depth?: number,
        color?: number,
        wireframe?: boolean
    ) {
        super(width || 10, height || 1, depth || 10, null, false);

        this.material = new MeshLambertMaterial({
            map: new TextureLoader().load(CEILING_BASIC),
            side: DoubleSide
        });

        this.mesh = new Mesh(this.geometry, this.material);
    }
}