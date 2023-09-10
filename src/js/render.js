import { WebGLRenderer } from 'three';

export const renderer = new WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;


document.body.appendChild( renderer.domElement );