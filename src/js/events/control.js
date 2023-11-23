export let pause = false;
export let execute = false;


document.getElementById('executeButton').addEventListener('click', function() {
    pause = false;
    execute = true;
});

document.getElementById('clearButton').addEventListener('click', function() {
    pause = false;
    execute = false;
});


document.getElementById('pauseButton').addEventListener('click', function() {
    pause = true;
    execute = false;
});
