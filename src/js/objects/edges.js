import { vertex } from './vertex.js';

import {LineBasicMaterial,
    Vector3,
    Matrix4,
    Quaternion,
    BufferGeometry,
    Line } from 'three';


function getTwoUniqueNumbers() {
let numberSet = new Set();

while (numberSet.size < 2) {
    let randomNumber = Math.floor(Math.random() * 216);
    numberSet.add(randomNumber);
}

return [...numberSet];
}

let matrix1 = new Matrix4()
let matrix2 = new Matrix4()
let points
let edge
let position = new Vector3()
let geometryEdge
let materialEdge


export const edges = new Map();
export const uniqueEdges = new Array();

for(let i = 0; i < 216; i++) {
    edges[i] = Array();
}

for(let i = 0; i < 100; i++) {
    points = []
    const [a, b] = getTwoUniqueNumbers();

    vertex.getMatrixAt(a, matrix1);
    vertex.getMatrixAt(b, matrix2);

    matrix1.decompose(position, new Quaternion(), new Vector3());

    points.push(new Vector3(
        position.x,
        position.y,
        position.z
    ));
    
    matrix2.decompose(position, new Quaternion(), new Vector3());
    points.push(new Vector3(
        position.x,
        position.y,
        position.z
    ));

    geometryEdge = new BufferGeometry().setFromPoints(points);
    
    materialEdge = new LineBasicMaterial({
        color: 0x2e2e2e,
        linewidth: 1
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