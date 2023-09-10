import { SphereGeometry, Mesh, MeshStandardMaterial } from 'three';

const sphereGeometry = new SphereGeometry(4, 50, 50);
const sphereMaterial = new MeshStandardMaterial({
	color: 0x0000ff,
	wireframe: false
});

export const sphere = new Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(-10 , 10, 0)
sphere.castShadow = true
