import {
    DoubleSide,
    Material,
    Mesh,
    MeshLambertMaterial,
    TextureLoader
} from 'three';
import {Cube} from '../primitives/cube';

export class Wall extends Cube {
    constructor (
        width?: number,
        height?: number,
        depth?: number,
        color?: number,
        wireframe?: boolean
    ) {
        super(
            width || 1,
            height || 10,
            depth || 10,
            null,
            false
        );

        this.material = new MeshLambertMaterial({
            map: new TextureLoader().load('textures/wall.jpg'),
            side: DoubleSide
        });

        this.mesh = new Mesh(this.geometry, this.material);
    }
}