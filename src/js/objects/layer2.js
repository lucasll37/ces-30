import { BoxGeometry, MeshNormalMaterial, InstancedMesh, Color, Object3D } from 'three';

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshNormalMaterial();
export const layer2 = new InstancedMesh(geometry, material, 100);

const dummy = new Object3D();

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {

        dummy.position.x = 5 * i;
        dummy.position.y = 5 * j;
        dummy.position.z = 100;

        dummy.updateMatrix();
        layer2.setMatrixAt(i * 10 + j, dummy.matrix);
    }
}