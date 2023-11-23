import { editor } from '../utils/aceEditor';

export let validCode = false;
export let play = false;
export let speed = 1000;
export let dijkstra;

document.getElementById('executeButton').addEventListener('click', function() {
    play = false;

    try {
        code = editor.getValue();
        const lines = code.split('\n');       
        const codeWithoutHead = lines.slice(11, -2).join('\n');

        // dijkstra = new Function('vertexs', 'edges', 'distances', 'visited', 'predecessors', 'edgePath', 'startVertex', 'endVertex', codeWithoutHead);
        
        validCode = true;
        play = false;
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
