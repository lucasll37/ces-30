import { BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three';
import nebula from '../../assets/nebula.jpg';



const box2Geometry = new BoxGeometry(4, 4, 4);
const box2Material = new MeshBasicMaterial({
	// color: 0x00ff00,
	// map: textureLoader.load(nebula)
});
const textureLoader = new TextureLoader();


export const box2 = new Mesh( box2Geometry, box2Material );
box2.position.set(0 , 15, 10)
box2.material.map = textureLoader.load(nebula)