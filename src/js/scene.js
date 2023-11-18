import { Scene, FogExp2, CubeTextureLoader, TextureLoader } from 'three';
import { vertex } from './objects/vertex';
import { uniqueEdges } from './objects/edges';
import { ambientLight, directionalLight, spotLight } from './objects/lights'
// import { skySphere } from './objects/skySphere'
// import { axexHelper, gridHelper, dLightHelper, dLightShadowHelper, sLightHelper } from './objects/helpers';
import stars from '../assets/stars.jpg';

export const scene = new Scene();

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(spotLight)
scene.add(vertex)

uniqueEdges.forEach(edge => {
    scene.add(edge)
})

// scene.add(axexHelper);
// scene.add(dLightHelper)
// scene.add(dLightShadowHelper)
// scene.add(sLightHelper)
// scene.add(skySphere);

scene.fog = new FogExp2(0xFFFFFF, 0, 100)


const textureLoader = new TextureLoader();
scene.background = textureLoader.load(stars);

// const cubeTextureLoader = new CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
// 	nebula, nebula, nebula, nebula, nebula, nebula
// ])
