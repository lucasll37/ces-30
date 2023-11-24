import { scene } from './scene';
import { edges } from './objects/edge';
import { vertexs } from './objects/vertex';
// import { guiOptions } from './utils/gui';
// import { sLightHelper } from './objects/helpers';
import { camera } from './camera';
import { renderer } from './render';
import { speed, validCode, play, dijkstra, endVertex, startVertex, distances } from './events';
import './events'


let lastTimestamp = 0;
let delta;
let finished;


const visited = new Set();
const predecessors = Array(vertexs.length).fill(null);
const edgePath = Array(vertexs.length).fill(null);

export function animation( timestamp ) {

    delta = (timestamp - lastTimestamp);
    
    if(validCode && play && !finished && delta > speed) {
        lastTimestamp = timestamp;

        finished = dijkstra(vertexs, edges, distances, visited, predecessors, edgePath, startVertex, endVertex);

        if(finished) {

            for (let at = endVertex; at != null; at = predecessors[at]) {
                if (at !== endVertex && at !== startVertex) {
                    vertexs[at].material.color.set(0xff0000);
                }
            }

            for (let at = endVertex; at != null && edgePath[at] != null; at = edgePath[at].from) {
                edgePath[at].line.material.color.set(0xff0000);
                edgePath[at].line.material.opacity = 1;
            }
        }
    }
	
	// sLightHelper.update();


	renderer.render( scene, camera );	
}
