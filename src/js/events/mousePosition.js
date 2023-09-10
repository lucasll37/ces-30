import { Vector2 } from 'three';


export const mousePosition = new Vector2();

window.addEventListener('mousemove', (e) => {
	mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
	mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
})