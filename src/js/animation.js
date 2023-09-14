import { scene } from './scene';
import { sphere } from './objects/sphere';
import { rayCaster } from './rayCaster';
import { guiOptions } from './utils/gui';
import { sLightHelper } from './objects/helpers';
import { mousePosition } from './events/mousePosition';
import { camera } from './camera';
import { renderer } from './render';
import '../js/events' 

let step = 0;


export function animation( time ) {
	
	step += guiOptions.speed;
	sphere.position.y = 10 * Math.abs(Math.sin(step));
	
	
	rayCaster.setFromCamera(mousePosition, camera);
	const intersects = rayCaster.intersectObjects(scene.children);
	console.log(intersects)
	

	sLightHelper.update();
	renderer.render( scene, camera );	
}