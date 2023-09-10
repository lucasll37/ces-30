import { AmbientLight, DirectionalLight, SpotLight } from 'three';


export const ambientLight = new AmbientLight(0x333333);

export const directionalLight = new DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(-30, 50, 0)
directionalLight.castShadow = true
directionalLight.shadow.camera.bottom = -12;

export const spotLight = new SpotLight(0xffffff);
spotLight.position.set(-100, 100, 0)
spotLight.castShadow = true
spotLight.angle = 0.2;