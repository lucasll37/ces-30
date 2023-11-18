import {SphereGeometry,
        InstancedMesh,
        MeshNormalMaterial,
        Object3D
        } from 'three';


const vertexGeometry = new SphereGeometry(1);
const vertexMaterial = new MeshNormalMaterial();
export const vertex = new InstancedMesh(vertexGeometry, vertexMaterial, 216);

const temp = new Object3D();

let aux = 0
const n = 15;
for(let i = -3; i < 3; i++) {
    for(let j = -3; j < 3; j++) {
        for(let k = -3; k < 3; k++) {
            temp.position.x = i * n + Math.random() * 5;
            temp.position.y = j * n + Math.random() * 5;
            temp.position.z = k * n + Math.random() * 5;
            
            temp.updateMatrix();
            vertex.setMatrixAt(aux, temp.matrix);
            aux += 1;

        }
    }
}
