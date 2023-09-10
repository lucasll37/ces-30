import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { renderer } from './render';
import { camera } from './camera';
import { animation } from './animation'


const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update()

renderer.setAnimationLoop(animation)