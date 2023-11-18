import { GUI } from 'dat.gui';
import { spotLight } from '../objects/lights';

export const gui = new GUI();

export const guiOptions = {
	sphereColor: '#ffea00',
	wireframe: false,
	speed: 0.01,
	angleSpotLight: 0.2,
	penumbras: 0,
	intensity: 1
}

gui.add(guiOptions, 'angleSpotLight', 0, 1).onChange(e => {
    spotLight.angle.set(e);
})

gui.add(guiOptions, 'penumbras', 0, 1).onChange(e => {
    spotLight.penumbras.set(e);
})

gui.add(guiOptions, 'intensity', 0, 1).onChange(e => {
    spotLight.intensity.set(e);
    
})