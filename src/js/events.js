import { editor } from './utils/aceEditor';
import { Vector2 } from 'three';
import { renderer } from './render';
import { vertexs } from './objects/vertex';
import { rayCaster } from './rayCaster';
import { camera } from './camera';
import { scene } from './scene';
import { uniqueEdges } from './objects/edge';

export const distances = Array(vertexs.length).fill(Infinity);
export let validCode = false;
export let play = false;
export let speed = 1000;
export let dijkstra;
export let startVertex;
export let endVertex;

let objectsMesh;
let firstObjectMesh;
let index;


rect = renderer.domElement.getBoundingClientRect();
let mousePosition = new Vector2();

document.getElementById('executeButton').addEventListener('click', function() {
    play = false;

    try {
        code = editor.getValue();
        const lines = code.split('\n');       
        const codeWithoutHead = lines.slice(11, -2).join('\n');

        dijkstra = new Function('vertexs', 'edges', 'distances', 'visited', 'predecessors', 'edgePath', 'startVertex', 'endVertex', codeWithoutHead);
        
        validCode = true;
        play = false;
        

        uniqueEdges.forEach(edge => {
            edge.material.opacity = 0;
        })

        if(startVertex === undefined) {
            startVertex = 0;
            vertexs[startVertex].material.color.setHex(0x00ff00);
        }

        if(endVertex === undefined) {
            endVertex = 511;
            vertexs[endVertex].material.color.setHex(0xff0000);
        }

        distances[startVertex] = 0;
        this.style.backgroundColor = '#0000ff';  
    }
    
    catch (error) {
        validCode = false;
        play = false;
        this.style.backgroundColor = '#ff0000';
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    validCode = false;
    play = false;
    editor.setValue('', -1);
});

document.getElementById('playButton').addEventListener('click', function() {
    play = true;
});


document.getElementById('pauseButton').addEventListener('click', function() {
    play = false;
});

document.getElementById("speedControl").addEventListener("change", function(e) {
    speed = - e.target.value;
});





window.addEventListener('click', (e) => {
    // e.preventDefault();
    mousePosition.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mousePosition.y = - ((e.clientY - rect.top) / rect.height) * 2 + 1;

    rayCaster.setFromCamera(mousePosition, camera);
    const intersects = rayCaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {

        objectsMesh = intersects.filter(obj => obj.object.type == 'Mesh')

        if(objectsMesh.length > 0) {
            firstObjectMesh = objectsMesh[0].object;
        }

        else {
            return;
        }
        
        vertexs.forEach((vertex, ind) => {
            if(vertex.uuid == firstObjectMesh.uuid) {
                index = ind;
            }
        })
    }

    else {
        return;
    }
    
    
    if(index !== undefined && !validCode) {
        if(!startVertex) {
            startVertex = index;
            vertexs[startVertex].material.color.setHex(0x00ff00);
        }
        else if(!endVertex) {
            endVertex = index;
            vertexs[endVertex].material.color.setHex(0xff0000);
        }
        else {
            vertexs[startVertex].material.color.setHex(0xffffff);
            vertexs[endVertex].material.color.setHex(0xffffff);
            startVertex = index;
            endVertex = null;
            vertexs[startVertex].material.color.setHex(0x00ff00);
        }
    }

    
    
})


window.addEventListener('resize', () => {

    rect = renderer.domElement.getBoundingClientRect();

    const divScene = document.getElementById('scene');
    camera.aspect = divScene.clientWidth / divScene.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(divScene.clientWidth, divScene.clientHeight)
})