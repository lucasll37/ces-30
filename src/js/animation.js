import { scene } from './scene';
import { edges } from './objects/edge';
import { vertexs } from './objects/vertex';
import { editor } from './utils/aceEditor';
// import { rayCaster } from './rayCaster';
// import { guiOptions } from './utils/gui';
// import { sLightHelper } from './objects/helpers';
// import { mousePosition } from './events/mousePosition';
import { camera } from './camera';
import { renderer } from './render';
import '../js/events' 
import { pause, execute } from './events/control';

let slider
let valor
let valorNumerico

function sleep(seg) {

    return new Promise(resolve => setTimeout(resolve, seg * 1000));
}

// dfs = (n_vertex, renderer, scene, camera) => {

//     renderer.render( scene, camera );

//     const slider = document.getElementById('speedControl');
//     const valor = slider.value;
//     const valorNumerico = parseInt(valor, 10);

    
//     for (const edge of edges[n_vertex]) {

//         while (pause) {
//             renderer.render( scene, camera );
//         }

//         vertexs[edge.to].material.color.set(0xa09db2);

//         if (edge.line.material.color.getHex() === 0x2e2e2e) {

//             console.log(`VERTICE ${n_vertex} -> ${edge.to}`);
            
//             edge.line.material.color.set(0xffffff);
//             edge.line.material.linewidth = 1;

            
//             vertexs[edge.to].material.color.set(0xff0000);
            
//             renderer.render(scene, camera);
//             sleep(1);
//             console.log(`dfs`);
//             dfs(edge.to, renderer, scene, camera);

//         }
//     }

//     vertexs[n_vertex].material.color.set(0xffffff);

// }


export async function animation( time ) {

    if(execute) {
        execute = false;
        console.log(execute)

        const code = editor.getValue();
        try {
            eval(code)
            dfs();
        }

        catch (e) {
            console.error('Ocorreu um erro durante a execução do código:', e);
        }
    }


	// rayCaster.setFromCamera(mousePosition, camera);
	// const intersects = rayCaster.intersectObjects(scene.children);
	// console.log(intersects)
	
	// sLightHelper.update();


	renderer.render( scene, camera );	
}

