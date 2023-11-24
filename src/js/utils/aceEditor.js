import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

export const editor = ace.edit("editor", {
    mode: "ace/mode/javascript"
});

const defaultFunc = `dijkstra = (
    vertexs,
    edges,
    distances,
    visited,
    predecessors,
    edgePath,
    startVertex,
    endVertex
) => {

    let minDistance = Infinity;
    let currentVertex = -1;

    for (let j = 0; j < vertexs.length; j++) {

        if (!visited.has(j) && distances[j] < minDistance) {
            minDistance = distances[j];
            currentVertex = j;
        }
    }

    if (currentVertex === -1) {
        return true;
    }

    visited.add(currentVertex);

    // if (currentVertex !== endVertex && currentVertex !== startVertex) {
    //     vertexs[currentVertex].material.color.set(0xffffff);
    // }

    for (const edge of edges[currentVertex]) {

        if (!visited.has(edge.to)) {

            edge.line.material.opacity = 0.3;
            let newDistance = distances[currentVertex] + 1;

            if (newDistance < distances[edge.to]) {

                distances[edge.to] = newDistance;
                predecessors[edge.to] = currentVertex;
                edgePath[edge.to] = edge;
            }
        }
    }

    return false;
}
`;

editor.setValue(defaultFunc, -1);

