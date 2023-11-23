import { Vector2 } from 'three';
import { renderer } from '../render';

export const mousePosition = new Vector2();
let rect;

window.addEventListener('mousemove', (e) => {
    rect = renderer.domElement.getBoundingClientRect();
    mousePosition.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mousePosition.y = - ((e.clientY - rect.top) / rect.height) * 2 + 1;
}, false)

