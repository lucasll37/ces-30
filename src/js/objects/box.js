import { BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three';
import nebula from '../../assets/nebula.jpg';


export function add(n) {
	const geometry = new BoxGeometry(1, 1, 1);
	const textureLoader = new TextureLoader();
	const material = new MeshBasicMaterial({
		// color: 0x00ff00,
		// map: textureLoader.load(nebula)
	});

	teste = []
	let aux
	for(let i = 0; i < n; i++) {
		aux = new Mesh( geometry, material );
		aux.position.set(i*2, 1, 1)
		test.add(aux)
	}

	return teste
}