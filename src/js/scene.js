import { Scene, FogExp2, CubeTextureLoader, TextureLoader } from 'three';
import * as THREE from 'three';
import { plane } from './objects/plane';
import { sphere } from './objects/sphere';
import { box2 } from './objects/box2';
import { ambientLight, directionalLight, spotLight } from './objects/lights'
// import { skySphere } from './objects/skySphere'
import { layer } from './objects/layer'
import { layer2 } from './objects/layer2'
import { axexHelper, gridHelper, dLightHelper, dLightShadowHelper, sLightHelper } from './objects/helpers';
import stars from '../assets/stars.jpg';

export const scene = new Scene();

// scene.add(plane)
scene.add(axexHelper);
// scene.add(sphere)
// scene.add(gridHelper);
scene.add(ambientLight);
scene.add(directionalLight)
scene.add(dLightHelper)
scene.add(spotLight)
// scene.add(dLightShadowHelper)
// scene.add(sLightHelper)
// scene.add(layer)
// scene.add(layer2)
// scene.add(box2)
// scene.add(skySphere);

// scene.fog = new FogExp2(0xFFFFFF, 1)
// scene.fog = new FogExp2(0xFFFFFF, 0, 100)


const textureLoader = new TextureLoader();
// const cubeTextureLoader = new CubeTextureLoader();

scene.background = textureLoader.load(stars);
// scene.background = cubeTextureLoader.load([
// 	nebula, nebula, nebula, nebula, nebula, nebula
// ])

//////////////////////////////////////////////


const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.InstancedMesh(geometry, material, 216);
scene.add(mesh);

const dummy = new THREE.Object3D();
let aux = 0
const n = 15;
for(let i = -3; i < 3; i++) {
    for(let j = -3; j < 3; j++) {
        for(let k = -3; k < 3; k++) {
            dummy.position.x = i * n + Math.random() * 5;
            dummy.position.y = j * n + Math.random() * 5;
            dummy.position.z = k * n + Math.random() * 5;
            
            dummy.updateMatrix();
            mesh.setMatrixAt(aux, dummy.matrix);
            aux += 1;

        }
    }
}

function getTwoUniqueNumbers() {
    let numberSet = new Set();
  
    while (numberSet.size < 2) {
        let randomNumber = Math.floor(Math.random() * 216);
        numberSet.add(randomNumber);
    }
    
    return [...numberSet];
}

let matrix1 = new THREE.Matrix4();
let matrix2 = new THREE.Matrix4();
let points = [];
let line
let position = new THREE.Vector3();
let geometryl;
let materiall = new THREE.LineBasicMaterial({
    color: 0xff0000,
    linewidth: 1
});


for(let i = 0; i < 100; i++) {
    const [a, b] = getTwoUniqueNumbers();
    mesh.getMatrixAt(a, matrix1);
    mesh.getMatrixAt(b, matrix2);

    matrix2.decompose(position, new THREE.Quaternion(), new THREE.Vector3());
    console.log(position)
    points.push(new THREE.Vector3(
        position.x,
        position.y,
        position.z
    ));
        
    matrix2.decompose(position, new THREE.Quaternion(), new THREE.Vector3());
    console.log(position)
    points.push(new THREE.Vector3(
        position.x,
        position.y,
        position.z
    ));

    geometryl = new THREE.BufferGeometry().setFromPoints(points);
    line = new THREE.Line(geometryl, materiall);
    scene.add(line);
}