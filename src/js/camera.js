import { PerspectiveCamera } from "three";

const divScene = document.getElementById('scene');

export const camera = new PerspectiveCamera(
	75,
	divScene.clientWidth / divScene.clientHeight,
	0.01,
	1000
);
	
camera.position.set(45, 60, 90)