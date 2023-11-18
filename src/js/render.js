import { WebGLRenderer } from 'three';

export const renderer = new WebGLRenderer( { antialias: true } );
const divScene = document.getElementById('scene');

renderer.setSize(divScene.clientWidth, divScene.clientHeight);
renderer.shadowMap.enabled = true;
divScene.appendChild( renderer.domElement );