import {SphereGeometry,
        Mesh,
        MeshStandardMaterial,
        } from 'three';

let vertexGeometry;
let vertexMaterial;
let vertex;
export const vertexs = new Array();


const n = 15;
for(let i = -4; i < 4; i++) {
    for(let j = -4; j < 4; j++) {
        for(let k = -4; k < 4; k++) {


            vertexGeometry = new SphereGeometry(1);
            vertexMaterial = new MeshStandardMaterial(
                {color: 0x808080}
            );

            vertex = new Mesh(vertexGeometry, vertexMaterial);


            vertex.position.x = i * n + Math.random() * 5;
            vertex.position.y = j * n + Math.random() * 5;
            vertex.position.z = k * n + Math.random() * 5;
            
            vertexs.push(vertex);
        }

    }
}