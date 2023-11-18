import { scene } from './scene';
import { edges } from './objects/edges';
// import { rayCaster } from './rayCaster';
// import { guiOptions } from './utils/gui';
// import { sLightHelper } from './objects/helpers';
// import { mousePosition } from './events/mousePosition';
import { camera } from './camera';
import { renderer } from './render';
import '../js/events' 

let slider
let valor
let valorNumerico

async function hold(segundos) {
    return new Promise(resolve => {
        setTimeout(resolve, segundos * 3000);
    });
}

async function dfs(vertex) {

    slider = document.getElementById('speedControl');
    valor = slider.value;
    valorNumerico = parseInt(valor, 10);

    for (const edge of edges[vertex]) {
        if (edge.line.material.color.getHex() === 0x2e2e2e) {

            // console.log(`VERTICE ${vertex} -> ${edge.to}`);
            
            edge.line.material.color.set(0xffffff);
            edge.line.material.linewidth = 10;

            renderer.render(scene, camera);
            await hold(1/valorNumerico);


            dfs(edge.to);
        }
    }
}



export async function animation( time ) {
	
    for(i = 0; i < 216; i++) {
        // console.log(i)
	    await dfs(i)
    }

    // await dfs(1)


	// rayCaster.setFromCamera(mousePosition, camera);
	// const intersects = rayCaster.intersectObjects(scene.children);
	// console.log(intersects)
	
	// sLightHelper.update();


	renderer.render( scene, camera );	
}

