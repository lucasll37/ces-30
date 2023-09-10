import { PlaneGeometry, MeshBasicMaterial, DoubleSide, Mesh } from 'three';


const planeGeometry = new PlaneGeometry( 30, 30);
const planeMaterial = new MeshBasicMaterial({
	color: 0xffffff,
	side: DoubleSide
});

export const plane = new Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow = true