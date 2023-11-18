import { camera } from '../camera';
import { renderer } from '../render';

window.addEventListener('resize', () => {

    const divScene = document.getElementById('scene');


    camera.aspect = divScene.clientWidth / divScene.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(divScene.clientWidth, divScene.clientHeight)
})