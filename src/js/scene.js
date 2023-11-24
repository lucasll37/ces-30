import { Scene, TextureLoader } from 'three';
import { vertexs } from './objects/vertex';
import { uniqueEdges } from './objects/edge';
import { ambientLight, directionalLight, spotLight } from './objects/lights'
// import { axexHelper, gridHelper, dLightHelper, dLightShadowHelper, sLightHelper } from './objects/helpers';
import stars from '../assets/stars.jpg';

export const scene = new Scene();

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(spotLight)

vertexs.forEach(vertex => {
    scene.add(vertex)
})

uniqueEdges.forEach(edge => {
    scene.add(edge)
})

// scene.add(axexHelper);
// scene.add(dLightHelper)
// scene.add(dLightShadowHelper)
// scene.add(sLightHelper)


const textureLoader = new TextureLoader();
scene.background = textureLoader.load(stars);