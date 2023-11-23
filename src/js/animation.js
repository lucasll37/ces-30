import { scene } from './scene';
import { edges } from './objects/edge';
import { vertexs } from './objects/vertex';
import { rayCaster } from './rayCaster';
// import { guiOptions } from './utils/gui';
// import { sLightHelper } from './objects/helpers';
import { camera } from './camera';
import { renderer } from './render';
import { speed, validCode, play, dijkstra } from './events/control';
import { mousePosition } from './events/mousePosition';
import './events/resizeWindow'
// import './events/mousePosition'


let lastTimestamp = 0;
let delta;
let index;
let startVertex = 0;
let endVertex= 450;
const distances = Array(vertexs.length).fill(Infinity);
distances[startVertex] = 0;
const visited = new Set();
const predecessors = Array(vertexs.length).fill(null);
const edgePath = Array(vertexs.length).fill(null);
let finished;

vertexs[startVertex].material.color.setHex(0x00ff00);
vertexs[endVertex].material.color.setHex(0xff0000);

export async function animation( timestamp ) {

    delta = (timestamp - lastTimestamp);
    
    if(validCode && play && !finished && delta > speed) {
        lastTimestamp = timestamp;

        finished = dijkstra(vertexs, edges, distances, visited, predecessors, edgePath, startVertex, endVertex);

        if(finished) {
            for (let at = endVertex; at != null; at = predecessors[at]) {
                vertexs[at].material.color.set(0xff0000);
            }

            for (let at = endVertex; at != null && edgePath[at] != null; at = edgePath[at].from) {
                edgePath[at].line.material.color.set(0xff0000);
            }
        }
    }


    
    
	// rayCaster.setFromCamera(mousePosition, camera);
	// const intersects = rayCaster.intersectObjects(scene.children);

    // if (intersects.length > 0) {
    //     var firstObject = intersects[0].object;

    //     vertexs.forEach((vertex, ind) => {
    //         if(vertex.uuid == firstObject.uuid) {
    //             index = ind;
    //         }
    //     })
    // }

	// console.log(index)
	
	// sLightHelper.update();


	renderer.render( scene, camera );	
}

