import { PerspectiveCamera } from "three";

export const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.01,
	1000
);
	
camera.position.set(-10, 30, 30)