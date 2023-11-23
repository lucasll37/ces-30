import { vertexs } from './vertex.js';

import {LineBasicMaterial,
    Vector3,
    BufferGeometry,
    Line } from 'three';


function getTwoUniqueNumbers() {
    let numberSet = new Set();

    while (numberSet.size < 2) {
        let randomNumber = Math.floor(Math.random() * 512);
        numberSet.add(randomNumber);
    }

    return [...numberSet];
}

let points
let edge
let geometryEdge
let materialEdge


export const edges = new Map();
export const uniqueEdges = new Array();

for(let i = 0; i < 512; i++) {
    edges[i] = Array();
}

for(let i = 0; i < 1000; i++) {
    points = []
    const [a, b] = getTwoUniqueNumbers();

    points.push(new Vector3(
        vertexs[a].position.x,
        vertexs[a].position.y,
        vertexs[a].position.z
    ));
    
    points.push(new Vector3(
        vertexs[b].position.x,
        vertexs[b].position.y,
        vertexs[b].position.z
    ));

    geometryEdge = new BufferGeometry().setFromPoints(points);
    
    materialEdge = new LineBasicMaterial({
        color: 0x505050,
        opacity: 0.5
    });

    edge = new Line(geometryEdge, materialEdge);

    edges[a].push({
        "to": b,
        "line": edge
    });

    
    edges[b].push({
        "to": a,
        "line": edge
    });

    uniqueEdges.push(edge)
}

